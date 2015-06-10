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

function getJSONForMilestone(element, index, array) {
    $.get(element,  function( data ) {
        setProgressBarsAndTitles(data);
    });
}

function setProgressBarsAndTitles(data){
    $("progress-bar-parent").append(
        
    );
}
