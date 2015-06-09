function getJSONForAllMilestones() {
    var milestonesToRetrieve = [
        'https://api.github.com/repos/DriveAI/Perception/milestones/1',
        'https://api.github.com/repos/DriveAI/Perception/milestones/2',
        'https://api.github.com/repos/DriveAI/Perception/milestones/3',
        'https://api.github.com/repos/DriveAI/Actuation/milestones/1',
        'https://api.github.com/repos/DriveAI/PathPlanning/milestones/1',
        'https://api.github.com/repos/DriveAI/Navigation/milestones/1'
        ];

    var milestoneJSON = [];

    for (var i = 0; i < milestonesToRetrieve.length; i++) {
        milestoneJSON.push(getJSONForMilestone(milestonesToRetrieve[i]));
    }

    console.log(milestoneJSON);
}

function getJSONForMilestone(url) {
    return $.get(url);
}
