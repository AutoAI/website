function getJSONForAllMilestones() {
    [
        'https://api.github.com/repos/DriveAI/Perception/milestones/1',
        'https://api.github.com/repos/DriveAI/Perception/milestones/2',
        'https://api.github.com/repos/DriveAI/Perception/milestones/3',
        'https://api.github.com/repos/DriveAI/Actuation/milestones/1',
        'https://api.github.com/repos/DriveAI/PathPlanning/milestones/1',
        'https://api.github.com/repos/DriveAI/Navigation/milestones/1'
    ].forEach(getJSONForMilestone);
}
getJSONForAllMilestones();

function getJSONForMilestone(element, index, array) {
    $.get(element,  function( data ) {
        setProgressBarsAndTitles(data);
    });
}

function setProgressBarsAndTitles(data) {
	var totalIssues = data.open_issues + data.closed_issues;
	var percentageComplete = (totalIssues == 0)
		? 0
		: data.closed_issues / totalIssues
	;
    $("#progress-bar-parent").append(
		'<div class="row">' +
			'<div class="large-6 medium-6 small-12 columns">' +
				'<h5><a href="' + data.html_url + '">' + data.title + '</a></h5>' +
				'<span>Open Issues: ' + data.open_issues + ', </span><span> Closed Issues: ' + data.closed_issues + '</span>' +
				'<div class="progress success radius">' +
						'<span class="meter" style="width:' + percentageComplete*100 + '%"></span>' +
				'</div>' +
			'</div>' +
			'<div class="large-6 medium-6 small-12 columns">' +
				'<span>' + data.description + '</span>' +
			'</div>' +
		'</div>' + '<hr/>'
    );
}
