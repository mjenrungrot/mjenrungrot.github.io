// @flow
/* eslint-disable max-len */

const data = [
  {
    title: 'The Cone of Silence: Speech Separation by Localization',
    authors: [
      'Teerapat Jenrungrot',
      'Vivek Jayaram',
      'Steve Seitz',
      'Ira Kemelmacher-Shlizerman',
    ],
    venue: 'Proceedings of the  34th Conference on Neural Information Processing Systems (NeurIPS) 2020',
    status: 'Accepted as an oral paper for ',
    link: 'https://grail.cs.washington.edu/projects/cone-of-silence/',
    image: 'https://camo.githubusercontent.com/7a10a7e5105ca80f895e1dfed58c5b9babb3dc1d/68747470733a2f2f7075626c69632d7374617469632d66696c65732e73332d75732d776573742d312e616d617a6f6e6177732e636f6d2f7265616c5f7465617365725f322e706e67',
    date: 'September 2020',
    pdf: null,
    code: 'https://github.com/vivjay30/Cone-of-Silence',
    desc:
      `
      Our method performs source separation and localization for human speakers.
      Key features include handling an arbitary number of speakers and moving speakers
      with a single network. This code allows you to run and evaluate our method on
      synthetically rendered data. If you have a multi-microphone array, you can also
      obtain real results like the ones in our demo video.`,
  },
  {
    title: 'A Board and Projects for an FPGA/Microcontroller-Based Embedded Systems Lab',
    authors: [
      'Kaveh Pezeshki',
      'Caleb Norfleet',
      'Erik Meike',
      'Teerapat Jenrungrot',
      'Matthew Spencer',
      'Joshua Brake',
      'David M. Harris',
    ],
    venue: 'Proceedings of the 2020 on Great Lakes Symposium on VLSI',
    status: 'Published in ',
    link: 'https://dl.acm.org/doi/abs/10.1145/3386263.3406930',
    image: 'src/data/publications/fpga_glsvlsi2020.png',
    date: 'September 2020',
    pdf: null,
    code: null,
    desc:
      `
      Harvey Mudd College has developed a sixth-generation circuit board
      with an FPGA and microcontroller for an embedded systems laboratory course.
      Students begin by assembling and testing their circuit board, then
      complete a series of laboratory projects with the chips. The course
      concludes withan open-ended team-based design project.`,
  },
  {
    title: 'MIDI Passage Retrieval using Cell Phone Pictures of Sheet Music',
    authors: [
      'Daniel Yang',
      'Thitaree Tanprasert',
      'Teerapat Jenrungrot',
      'Mengyi Shan',
      'TJ Tsai',
    ],
    venue:
      'Proceedings of the 20th Conference of the International Society for Music Information Retrieval (ISMIR) 2019',
    status: 'Published in ',
    link: null,
    image: 'src/data/publications/MidiPassageRetrieval_ismir2019.png',
    date: 'November 2019',
    pdf: 'data/publications/MidiPassageRetrieval_ismir2019.pdf',
    code: 'https://github.com/tjtsai/SheetMidiRetrieval',
    desc:
      `
      In this paper, we investigates a cross-modal retrieval problem
      in which a user would like to retrieve a passage of music from
      a MIDI file by taking a cell phone picture of a physical page
      of sheet music. We used a novel mid-level feature representation
      called a bootleg score that explicitly encodes the rules of
      Western musical notation.`,
  },
  {
    title: 'MIDI-Sheet Music Alignment using Bootleg Score Synthesis',
    authors: [
      'Thitaree Tanprasert',
      'Teerapat Jenrungrot',
      'Meinard Mülller',
      'TJ Tsai',
    ],
    venue:
      'Proceedings of the 20th Conference of the International Society for Music Information Retrieval (ISMIR) 2019',
    status: 'Published in ',
    link: null,
    image: 'src/data/publications/SheetMidiSync_ismir2019.png',
    date: 'November 2019',
    pdf: 'data/publications/SheetMidiSync_ismir2019.pdf',
    code: 'https://github.com/ttanprasert/sheet-midi-sync',
    desc:
      `
      In this paper, we investigates a cross-modal retrieval problem
      in which a user would like to find a correspondence between a
      MIDI representation and its corresponding sheet music images.
      We used a novel mid-level feature representation
      called a bootleg score that explicitly encodes the rules of
      Western musical notation.`,
  },
  {
    title: 'Audio-Sheet Music Alignment using Soft Bootleg Score Synthesis',
    authors: ['Teerapat Jenrungrot', 'TJ Tsai'],
    venue: null,
    status: 'Preprint',
    link: null,
    image: 'src/data/publications/AudioSheetSync_final.png',
    date: 'December 2018',
    pdf: 'data/publications/AudioSheetSync_final.pdf',
    code: 'https://github.com/mjenrungrot/salience_sheet_following',
    desc:
      `
      In this paper, we investigates a cross-modal retrieval problem
      in which a user would like to find a correspondence between an
      audio representation and its corresponding sheet music images.
      We used a novel mid-level feature representation
      called a bootleg score that explicitly encodes the rules of
      Western musical notation.`,
  },
];

export default data;
