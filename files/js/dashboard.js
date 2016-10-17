//Global functions
function getRequestedPage(panelNameID, pageName) {
	displayLoader();
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", pageName, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			document.getElementById(panelNameID).innerHTML = xmlhttp.responseText;
			hideLoader();
			hideErrorPanel();
		} else if (xmlhttp.readyState == 4) {
			$('#' + panelNameID).hide();
			showErrorPanel(xmlhttp.status);
		}
	}
}

function displayLoader() {
	$('#loaderPanel').show();
	hideErrorPanel();
}

function hideLoader() {
	$('#loaderPanel').hide();
}

function showErrorPanel(errorNumber) {
	hideLoader();
	$('#error-number').html(errorNumber);
	$("#errorPanel").show();
}

function hideErrorPanel() {
	$("#errorPanel").hide();
}

function submitForm(formName, PanelName) {

	formName = '#' + formName;
	$.ajax({
		url : $(formName).attr('action'),
		type : 'POST',
		processData : false,
		contentType : false,
		data : new FormData($(formName)[0]),//$(formName).serialize(),
		dataType : 'html',
		beforeSend : function() {
			displayLoader();
		},
		success : function(data) {
			hideLoader();
			PanelName = '#' + PanelName;
			$(PanelName).html(data);
		},
		error : function(e) {
			console.log(e)
		}
	});
}

function displayErrorPanel(errorMessaege) {
	data = "<div class='alert alert-danger alert-dismissible' role='alert'> <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><center>"
			+ errorMessaege + "</center></div>";
	$('#errorPanel').html(data).fadeIn(1000).delay(2000).fadeOut(1000);
}
// Functions related to Topics
function sendCreateTopic() {
	if (validateCreateTopic() == true) {
		submitForm('createTopicForm', 'dataPanel');
	}
}
function validateCreateTopic() {
	if ($('#TopicName').val() == '' || $('#TopicName').val() == null) {
		displayErrorPanel('Please enter topic name.');
		return false;
	}
	return true;
}
// functions related to Questions
function sendCreateQuestion() {
	if (validateCreateQuestion() == true) {
		submitForm('createQuestionForm', 'dataPanel');
	}
}
function validateCreateQuestion() {
	if ($('#ParentTopic').val() == '' || $('#ParentTopic').val() == null) {
		displayErrorPanel('Please select parent topic');
		return false;
	} else if ($('#ChildTopic').val() == '' || $('#ChildTopic').val() == null) {
		displayErrorPanel('Please select child topic');
		return false;
	} else if ($('#ComplexityLevel').val() == ''
			|| $('#ComplexityLevel').val() == null) {
		displayErrorPanel('Please select complexity level');
		return false;
	} else if ($('#QuestionTextArea').val() == ''
			|| $('#QuestionTextArea').val() == null) {
		displayErrorPanel('Please enter question');
		return false;
	} else if ($('#Answer1').val() == '' || $('#Answer1').val() == null) {
		displayErrorPanel('Please Enter correct answer');
		return false;
	} else if ($('#Answer2').val() == '' || $('#Answer2').val() == null) {
		displayErrorPanel('Please Enter wrong Answer');
		return false;
	}
	return true;
}
// edit Topic
function sendEditTopicForm() {
	submitForm('EditTopicForm', 'dataPanel');
}
// Create Test
function sendCreateTestForm() {
	submitForm('createTestForm', 'dataPanel');
}
// institute
function sendCreateInstitute() {
	if ($('#createInstituteName').val() == ''
			|| $('#createInstituteName').val() == null) {
		displayErrorPanel('Please enter institute name.');
		return;
	}
	submitForm('createInstituteForm', 'dataPanel');
}
// group
function sendCreateGroup() {
	if ($('#createGroupName').val() == ''
			|| $('#createGroupName').val() == null) {
		displayErrorPanel('Please enter Group name.');
		return;
	}
	submitForm('createGroupForm', 'dataPanel');
}
// /institute Admin
function sendCreateInstituteAdmin() {
	if ($('#createInstituteAdminEmailId').val() == ''
			|| $('#createInstituteAdminEmailId').val() == null) {
		displayErrorPanel('Please enter email Id of user you want to make admin.');
		return;
	}
	submitForm('createInstituteAdminForm', 'dataPanel');
}
function castText2HTML(htmlText){
	    var ret = htmlText.replace(/>/g, '&gt;');
	    ret = ret.replace(/</g, '&lt;');
	    ret = ret.replace(/"/g, '&quot;');
	    ret = ret.replace(/'/g, "&apos;");
	    ret = ret.replace(/&;/g, '&amp');
	    ret = ret.replace(/\n/g, '<br>');    
	    ret = ret.replace(/\t/g, '&nbsp;&nbsp;&nbsp;');
	    ret = ret.replace(/ /g, '&nbsp;');
	    return ret;
}
// Create Global Question Bank
function sendCreateGlobalQuestionBank()
{
	$('#globalQuestion').val(castText2HTML($('#globalQuestion').val()));
	$('#globalAnswer1').val(castText2HTML($('#globalAnswer1').val()));
	$('#globalAnswer2').val(castText2HTML($('#globalAnswer2').val()));
	$('#globalAnswer3').val(castText2HTML($('#globalAnswer3').val()));
	$('#globalAnswer4').val(castText2HTML($('#globalAnswer4').val()));
	submitForm('createGlobalQuestionSetForm','mainPanel');
}
