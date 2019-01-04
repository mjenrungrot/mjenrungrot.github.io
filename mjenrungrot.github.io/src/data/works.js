// @flow

const data = [
  {
    position: "Remote Co-op Technical Consultant",
    workfor: "Microsoft Corporation",
    current: true,
    fromDate: "August 2018",
    toDate: null,
    link: null,
    image: null,
    desc:
      "Worked with 4 other students and a team from Microsoft Research to develop a system that improves users’ " +
      "reading experience by using eye-tracking data. Developed a system to classify confusing and interesting " +
      "regions in reading based on users’ gaze behavior. This project is a part of Harvey Mudd College’s year-long " +
      "senior capstone project supervised by Professor Julie Medero from HMC CS Department and a liaison from " +
      "Microsoft, Rob McKaughan."
  },
  {
    position: "Teaching Assistant",
    workfor: "Harvey Mudd College",
    current: true,
    fromDate: "January 2016",
    toDate: null,
    link: null,
    image: null,
    desc:
      "Tutored students and graded students’ homework for the following Math, CS, and Engineering classes: " +
      "Multivariable Calculus, Differential Equations/Linear Algebra, Principles of Computer Science, " +
      "Computability and Logic, Mathematics of Big Data, and Machine Learning"
  },
  {
    position: "Summer Research Assistant",
    workfor:
      "Harvey Mudd College, Engineering Department, Music Information Retrieval Lab",
    current: false,
    fromDate: "May 2018",
    toDate: "August 2018",
    link: null,
    image: null,
    desc:
      "Developed a dynamic programming algorithm for creating an alignment between sheet music and a " +
      "computer-synthesized audio signal in MIDI format. Designed a deep fully convolutional network " +
      "for detecting musical notes on sheet music and creating useful representations for the alignment. " +
      "Fine-tuned the network with real scanned sheet music to handle both scanned and computer-generated " +
      "sheet music. The project is supervised by Professor Timothy Tsai from HMC Engineering Department."
  },
  {
    position: "Research Assistant",
    workfor:
      "Harvey Mudd College, Engineering Department, Music Information Retrieval Lab",
    current: false,
    fromDate: "January 2017",
    toDate: "May 2018",
    link: null,
    image: null,
    desc:
      "Developed a system using Matlab and C/C++ to identify a song from a short, noisy cell phone recording of " +
      "the corresponding live performance. Optimized the computationally intensive portion of the system originally " +
      "written in Matlab by using C/C++ via MEX routines. Applied GPU accleration and parallelization to the system. " +
      "The project is supervised by Professor Timothy Tsai from HMC Engineering Department."
  },
  {
    position: "PCB Developer",
    workfor: "Harvey Mudd College, Engineering Department",
    current: false,
    fromDate: "September 2017",
    toDate: "May 2018",
    link: null,
    image: null,
    desc:
      "Designed and developed a PCB consisting of a microcontroller SAM4S and a Cyclone IV FPGA to be used in " +
      "a microprocessor-based systems class and created lab instructions based on the developed PCB. The project " +
      "is supervised by Professor David Money Harris from HMC Engineering Department and Professor Matthew Spencer " +
      "from HMC Engineering Department."
  },
  {
    position: "Summer Research Assistant, Remote Technical Consultant",
    workfor: "Intel Corporation",
    current: false,
    fromDate: "May 2017",
    toDate: "August 2017",
    link: null,
    image: null,
    desc:
      "Proposed a computational model for sound field separation and reconstruction of a 3-dimensional acoustic " +
      "environment. Designed and implemented a headphone-based system to simulate 3-dimensional sound localization " +
      "effects using Head-Related Transfer Functions (HRTF). The project is supervised by Professor Weiqing Gu " +
      "from HMC Mathematics Department in collaboration with Intel’s researchers."
  },
  {
    position: "Remote Software Developer",
    workfor: "Environmental Data Resources (EDR), Inc.",
    current: false,
    fromDate: "January 2017",
    toDate: "May 2017",
    link: null,
    image: null,
    desc:
      "Implemented a Hidden Markov model and support vector machine model for automatically parsing US addresses " +
      "into computer-readable formats. The project is supervised by Professor Weiqing Gu from HMC Mathematics " +
      "Department in collaboration with EDR’s representatives."
  },
  {
    position: "Remote Software Developer",
    workfor: "Harvey Mudd College, Computer Science Department",
    current: false,
    fromDate: "June 2016",
    toDate: "May 2017",
    link: null,
    image: null,
    desc:
      "Developed an interactive visualization using D3.js for showing data of schools within California for non-profit " +
      "organization STEAM:CODERS to promote computer science to underrepresented groups. Volunteered to improve CSS and " +
      "JavaScript on Turning Green ’s website for interactive user experience to advocate for environmental initiatives " +
      "in US colleges."
  },
  {
    position: "Summer Research Assistant",
    workfor: "Harvey Mudd College, Mathematics Department",
    current: false,
    fromDate: "May 2016",
    toDate: "August 2016",
    link: null,
    image: null,
    desc:
      "Applied machine learning techniques to detect anomalies in stock market data. Developed a backtesting " +
      "system and an actual automated trading system that connects to InteractiveBrokers for real-time trading. " +
      "Developed the distributed system and front-end using Python, Django, and Celery for parallelization. The " +
      "project is supervised by Professor Weiqing Gu from HMC Mathematics Department."
  }
];

export default data;
