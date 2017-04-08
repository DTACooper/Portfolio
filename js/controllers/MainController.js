app.controller('MainController', ['$scope', function($scope) {
  $scope.jobs = [
                  {
                    startdate: '01/2014',
                    enddate:'01/2017',
                    company:'Centient',
                    title:'Developer',
                    text:'Developing the front end of a web application using jQuery, javascript, CSS and HTML. I added new forms and sections of the site based on features added at the backend. The new system used a custom Freemarker Template Language (FTL) engine as well as a REST API. I used GIT, Stash and JIRA to keep track of issues and updates. Liaising with other developers in charge of different sections of the site (backend and collectors). Testing the system to ensure it worked as intended. From November 2015 I worked remotely from home, interacting with colleagues through Skype, Hipchat and emails.'
                  },
                  {
                    startdate:'09/2013',
                    enddate:'01/2014',
                    company:'Centient',
                    title:'Security Analyst',
                    text:'Using in house software to identify threats to clients. As well as viewing closed off forums and websites that search engines can’t find. During this time the old system was replaced and an external company was brought in to quickly build a new front end. There wasn’t much front end work to be done so I was shifted about the company into whatever role they needed me. I was involved in meeting the external company developers and had a say in the development.'
                  },
                  {
                    startdate:'04/2013',
                    enddate:'09/2013',
                    company:'Centient (previously Cybyl)',
                    title:'Developer',
                    text:' I worked with Python and Django as the old system was assessed for suitability. The old system used Beautiful Soup, Bootstrap, Websockets, and MongoDB. I helped plan the new system and learnt about possible technologies that it could use, such as various database systems and their uses. (MySQL, Oracle, PostGreSQL, MongoDB). I also learnt some Java.'
                  },
                  {
                    startdate:'09/2011',
                    enddate:'09/2013',
                    company:'Cybyl',
                    title:'Cyber Threat Analyst',
                    text:'Monitoring alerts/notifications and writing client facing reports to inform them of intelligence relevant to their sector of operation or directly to the client’s brand, such as phishing campaigns and planned action by hostile factions. Investigating network based threats by reconstructing activity using http headers, response bodies and volatile session information and any resources such as files which might contain useful metadata. Analysis of scripts/sourcecode/binaries found via secondary detection systems to determine its purpose and any inherent threat to clients. Creating Regular Expressions for use in software to identify threats to clients. This role involved shift work.'
                  },
                  {
                    startdate:'04/2003',
                    enddate:'08/2008',
                    company:'Smurfit Kappa West Auckland',
                    title:'Quality Assistant',
                    text:'Collecting machine performance data and updating spreadsheets. Issuing complaints and arranging returns of rejections. Updating the calibration system and document control. Auditing procedures as part of an audit team. General administration duties.'
                  },
                  {
                    startdate:'01/2002',
                    enddate:'04/2003',
                    company:'Teesdale Training',
                    title:'Trainee',
                    text:'Helped out at the Training Centre – looking after IT classes, working on evidence for NVQ Using IT and general office work e.g. photocopying, typing, putting together booklets and making posters.'
                  },
                  {
                    startdate:'10/2001',
                    enddate:'01/2002',
                    company:'Comtek',
                    title:'Shop Assistant',
                    text:'Dealt with customers in the shop. Solved computer problems, received training in various areas of IT. Built computers to specification. '
                  }
                ];



}]);
