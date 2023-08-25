package com.e2etesting.uuv.intellijplugin.run.configuration

import com.e2etesting.uuv.intellijplugin.model.UUVTargetScript
import com.intellij.openapi.fileChooser.FileChooserDescriptorFactory
import com.intellij.openapi.options.SettingsEditor
import com.intellij.openapi.ui.CheckBoxWithDescription
import com.intellij.openapi.ui.LabeledComponent
import com.intellij.openapi.ui.TextFieldWithBrowseButton
import com.intellij.util.ui.ComboBoxWithHistory
import org.apache.commons.lang3.StringUtils
import java.awt.BorderLayout
import java.awt.FlowLayout
import java.awt.GridLayout
import javax.swing.JCheckBox
import javax.swing.JComponent
import javax.swing.JPanel
import javax.swing.JTextField

class UUVRunSettingsEditor : SettingsEditor<UUVRunConfiguration>() {
    private val mainPanel: JPanel = JPanel()
    private var projectHomeDir: LabeledComponent<TextFieldWithBrowseButton>? = null
    private var useLocalScript: LabeledComponent<CheckBoxWithDescription>? = null
    private var targetScript: LabeledComponent<ComboBoxWithHistory>? = null
    private var targetTestFile: LabeledComponent<JTextField>? = null


    override fun resetEditorFrom(uuvRunConfiguration: UUVRunConfiguration) {
        projectHomeDir!!.component.textField.text = getProjectHomeDir(uuvRunConfiguration)
        useLocalScript!!.component.checkBox.isSelected = uuvRunConfiguration.useLocalScript
        targetScript!!.component.selectedItem = uuvRunConfiguration.targetScript
        targetTestFile!!.component.text = uuvRunConfiguration.targetTestFile
    }

    private fun getProjectHomeDir(uuvRunConfiguration: UUVRunConfiguration): String? =
        if (uuvRunConfiguration.projectHomeDir != null && StringUtils.isNotBlank(uuvRunConfiguration.projectHomeDir))
            uuvRunConfiguration.projectHomeDir
        else
            uuvRunConfiguration.project.basePath

    override fun applyEditorTo(uuvRunConfiguration: UUVRunConfiguration) {
        uuvRunConfiguration.projectHomeDir = projectHomeDir!!.component.textField.text
        uuvRunConfiguration.useLocalScript = useLocalScript!!.component.checkBox.isSelected
        uuvRunConfiguration.targetScript = targetScript!!.component.editor.item as String
        uuvRunConfiguration.targetTestFile = targetTestFile!!.component.text
    }

    override fun createEditor(): JComponent {
        mainPanel.layout = GridLayout(4,1, 0, 3)
        this.createUIComponents()
        return mainPanel
    }

    private fun createUIComponents() {
        val projectHomeDirPanel = JPanel()
        val fileChooser = FileChooserDescriptorFactory.createSingleFolderDescriptor()
        val textFieldWithBrowseButton = TextFieldWithBrowseButton(JTextField(50))
        textFieldWithBrowseButton.addBrowseFolderListener(
                "Select your project directory",
                null,
                null,
                fileChooser
        )
        projectHomeDir = LabeledComponent.create(textFieldWithBrowseButton, "Project directory", BorderLayout.WEST)
        projectHomeDirPanel.layout = FlowLayout(FlowLayout.LEFT)
        projectHomeDirPanel.add(projectHomeDir)
        mainPanel.add(projectHomeDirPanel)

        val targetScriptPanel = JPanel()
        targetScript = LabeledComponent.create(ComboBoxWithHistory("targetScript", UUVTargetScript.values().map { it.name }.toTypedArray()), "Target script", BorderLayout.WEST)
        targetScriptPanel.layout = FlowLayout(FlowLayout.LEFT)
        targetScriptPanel.add(targetScript)
        mainPanel.add(targetScriptPanel)


        val useLocalScriptPanel = JPanel()
        useLocalScript = LabeledComponent.create(CheckBoxWithDescription(JCheckBox(), null), "Use local npm script", BorderLayout.WEST)
        useLocalScriptPanel.layout = FlowLayout(FlowLayout.LEFT)
        useLocalScriptPanel.add(useLocalScript)
        mainPanel.add(useLocalScriptPanel)

        val targetTestFilePanel = JPanel()
        targetTestFile = LabeledComponent.create(JTextField(50), "Target test file", BorderLayout.WEST)
        targetTestFilePanel.layout = FlowLayout(FlowLayout.LEFT)
        targetTestFilePanel.add(targetTestFile)
        mainPanel.add(targetTestFilePanel)
    }
}