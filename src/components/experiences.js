const experiences = [
  {
    key: 1,
    image: "images/flow.jpeg",
    title: "FlowAI - SWE Intern",
    date: "May 2023 - Present",
    location: "Austin, TX",
    position: "Full Stack Lead Engineer",
    description: " As the leader of a dynamic full-stack team comprised of over 20 talented members, my role involves spearheading the development of Flow, an exceptional AI platform designed to amplify the productivity of sales representatives by an astounding 200%. In this capacity, I am responsible for overseeing the creation of server-side operations, utilizing Django to establish seamless API connections and configure the database with PostgreSQL. Additionally, I actively contribute to the front-end development, employing React.js, React MUI, and JavaScript to craft an engaging user interface. To ensure efficient project development, code reviews, and effective team meeting coordination, I leverage the power of Atlassian DevOps, CI/CD pipelines, and JIRA, enabling streamlined processes that enhance collaboration and productivity within our team.",
    link: "Experience-Page"
  },
  {
    key: 2,
    image: "images/aracala.jpeg",
    title: "ARCALA Lab Research Assistant",
    date: "May 2023 - Present",
    location: "Irvine, CA",
    position: "Research Assistant",
    description: "In my role as a Research Assistant at ARCALA, I have been actively involved in conducting cutting-edge research and implementing advanced techniques to optimize the execution of machine learning algorithms within a heterogeneous hardware environment. As part of my responsibilities, I am currently engaged in researching and developing strategies to improve the performance of machine learning tasks by leveraging diverse hardware accelerators. Specifically, I am focused on designing innovative approaches for load-balancing and pipelining machine learning tasks, utilizing the power of PyTorch, a popular deep learning framework. Through my work, I aim to enhance the efficiency and effectiveness of machine learning execution, contributing to the advancement of this exciting field of research.",
    link: "Experience-Page"
  },
  {
    key: 3,
    image: "images/pomonacs.png",
    title: "Computer Science Teaching Assistant",
    date: "August 2022 - Present",
    location: "Claremont, CA",
    position: "Data Structures & Adv. Programming (CS062) Mentor",
    description: " Currently mentoring students in Pomona College’s Data Structures and Advanced Programming in Java course through the JUnit framework and Debugger. Assisting with labs and on assignments throughout the semester has been a learning experience for me as I now get to experience the other side of this class. I believe that through this experience my knowledge on types of data structures, sorting algorithms, and on Java programming as a whole has and is expanding to an extent I could not have reached just by taking the course. The experience so far has been very rewarding and I am excited for the semester to continue and watch my classmates unlock new skills and talents." ,
    link: "Experience-Page"
  },
  {
    key: 4,
    image: "images/qsc.png",
    title: "Quantitative Skills Center Partner",
    date: "January 2023 - Present",
    location: "Claremont, CA",
    position: "Computer Science Teaching Partner",
    description: " Currently teaching and advising students as a partner for the Quantitative Skills Center at Pomona College. Working around 4-6 hours a week as the QSC, I am assisting students in the computer science department with their in-class projects and help studying for their assessments. Not only did this experience provide me with the opportunity to deepen my own understanding of computer science concepts, but it also allowed me to help others in their studies and see their progress and success. I found great satisfaction in being able to assist students in overcoming challenging coursework and seeing their grades improve. Furthermore, tutoring helped me to develop my communication and teaching skills, which will be valuable assets in my future endeavors. Overall, being a tutor was a positive and enriching experience, both personally and professionally. ",
    link: "Experience-Page"
  },
  {
    key: 5,
    image: "images/tomresearch.png",
    title: "Independent Research: Ethical Issues with Autonomous Vehicles",
    date: "June 2020 - November 2020",
    location: "San Jose, CA",
    position: "Research Conductor, Analyzer, and Author",
    description: " In our current age, automobile crashes are the second-highest leading cause of death for United States citizens, only second to heart attacks. In response to this, many new concepts to prevent automobile crashes reached the spotlight such as autonomous vehicles. However, the dependability of Artificial Intelligence and its decision-making abilities became subject to question. One miscalculation can result in the cost of one's life. Therefore, what should an autonomous vehicle do under dilemma situations? Faced with a trolley situation, should the AI choose to crash into pedestrians to protect the driver, or drive off a cliff to save the pedestrians... These are the types of questions that I aimed to gain data on while conducting independent research under the guidance of Stanford Professor, Tom Kosnik. I researched the ethical dilemmas regarding autonomous vehicles by analyzing the data from my survey that I sponsored on Amazon Mechanical Turk.",
    link: "Experience-Page"
  },
  {
    key: 6,
    image: "images/cairolab.png",
    title: "University of Colorado Boulder: Summer AI Research Program",
    date: "June 2020 - November 2020",
    location: "Boulder, CO",
    position: "Research Assistant",
    description: "Would you trust Artificial Intelligence? This question consists of a multitude of levels. Of course, it is easy to trust AI with simple day-to-day functions, but would you trust it with your life? Does justification matter in providing a sense of trust? These are the questions that my research at the Cairo Lab of the University of Colorado Boulder consisted of. Working with Ph.D. student Aaquib Tabrez, my partner and I expanded on Aaquib's previous research. We aimed to confirm whether providing justification impacted a person's impression of the AI machine. We set this research up by developing an online car racing game generated by AI. Before the racing game, the participant was informed that AI is omnipotent and would always be correct. However, during the simulation, the AI gave out both correct and incorrect instructions to the participant. After the game, the participant was asked to complete a survey utilized to measure their trust in the AI. During this process, I was able to experience hands-on coding with python, SQL, and JS whilst learning about the International Review Board and survey design."
  , link: "Experience-Page"
  },
  {
    key: 7,
    image: "images/stanfordneurodiversity.jpeg",
    title: "Stanford Medicine: SNP Reach",
    date: "June 2020 - July 2020",
    location: "Stanford, CA",
    position: "Student",
    description: "My time at Stanford's Neurodiversity Project was eye-opening. Previous to this program, I knew little about the field of neurodiversity and its impact on my community. My experience at SNP Reach gave me insight that stigmatized views on functional and neurological differences are based on misinformation. Many of these students with these “disorders” actually function with higher intelligence than the “average” person, disproving the misconception that such differences limit an individual's ability to succeed. Integrating neurodiversity in my community, I took advantage of Bellarmine’s Plant Entrepreneurship Club to integrate neurodiversity study into our mission, organizing several avenues by which neurodiversity awareness has spread throughout our school and the community at large."
    , link: "Experience-Page"
  },
  {
    key: 8,
    image: "images/hwaranglogo.png",
    title: "Hwarang Youth Foundation",
    date: "June 2018 - May 2021",
    location: "Saratoga, CA",
    position: "Chairperson of Silicon Valley District",
    description:"After starting Hwarang Youth Foundation's first district in Silicon Valley, it has been my joy to take part in the growth of the organization in my community. I was initially inspired by Hwarang's mission to build tomorrow’s leaders through acts of service and its devotion to serving the community. I first started as the Saratoga Chapter president, slowly growing my chapter one volunteer activity at a time such as the Blankets for Needy project -- where we fundraised through a garage sale to provide blankets for the nearby homeless shelter, City Team. When the Covid-19 pandemic hit, we still carried out our goal through the 'Give Sanitizer, Prevent Covid-19' project in which we made hand sanitizer to donate. Organizing initiatives for Hwarang, I’m often humbled by the need for a collaborative approach to both planning and execution. Placed in the leadership role of the Silicon Valley District Chairperson, I realized that being a leader doesn’t always mean being right or having all the answers; being a leader is inspiring and empowering others to come together, sharing insight while striving towards a common end."
  },
  {
    key: 9,
    image: "images/naofa.png",
    title: "National Academy of Athletics",
    date: "June 2022 - July 2022",
    location: "San Jose, CA",
    position: "Camp Director",
    description:"Working at the National Academy of Athletics was a valuable experience for me, as I had minimal experience working with children before this. Almost like I was thrown into the wild, I was in charge of directing multiple sports camps such as the NFL Football camp and a Volleyball camp. These camps consisted of 20 or more children ages ranging from 6 to 14. The most valuable lessons that I learned from this program were the importance of problem-solving, leadership, and patience. When working with children, many problems such as fighting or verbal abuse. During these events, mediating the problem properly is the priority so that the situation is prevented in the future. Additionally, leadership plays a prominent role in controlling the tempo and the well-being of a camp. Unorganized leadership ultimately leads to chaos, resulting in a bad experience for all parties. Finally, patience: I learned how acting out rashly only negatively impacts yourself, and how 'patience is a virtue. "
  }

]

export default experiences;
