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

function setProgressBarsAndTitles(data){
    $("#progress-bar-parent").append(
		'<div class="row">' +
			'<div class="large-6 medium-6 small-12">' +
				'<a href="' + data.html_url + '">' + data.title + '</a>' +
				'<div class="progress success radius">' +
						'<span class="meter" style="width:10%"></span>' +
				'</div>' +
			'</div>' +
			'<div class="large-6 medium-6 small-12">' +
				'<span>' + data.description + '</span>' +
			'</div>' +
		'</div>'
    );
}
