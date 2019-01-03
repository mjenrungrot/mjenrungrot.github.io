// @flow

const data = [
  {
    title: "Audio-Sheet Music Alignment using Soft Bootleg Score Synthesis",
    authors: ["Teerapat Jenrungrot", "TJ Tsai"],
    venue: null,
    status: "Preprint",
    link: null,
    image: "",
    date: "December 2018",
    pdf: "",
    code: "",
    desc:
      "Audio–sheet music alignment is the task of finding correspondences between time " +
      "instants in an audio recording and corresponding pixel locations in sheet music images. " +
      "We propose a simple, straightforward approach to this problem that requires little or " +
      "no training data. Our method consists of two main steps. The first step is to convert audio " +
      "into a crude approximation of a sheet music score, where sudden energy increases in " +
      "logarithmically-spaced frequency bins are mapped to floating notehead blobs appropriately " +
      "placed on a staff line system. We generate this crude ‘bootleg’ score in a soft manner, where " +
      "the darkness of the notehead blob is proportional to the amount of energy increase. The second " +
      "step is to align the bootleg score with the sheet music images using a simple variant of " +
      "dynamic time warping. We present empirical results on the multimodal sheet music dataset, including " +
      "a comparison to a state-of-the-art system based on deep reinforcement learning. Our method achieves " +
      "80% accuracy at an error tolerance of 400 pixels, which is approximately half a line of music."
  },
  {
    title: "MIDI-Sheet Music Alignment using Bootleg Score Synthesis",
    authors: [
      "Thitaree Tanprasert",
      "Teerapat Jenrungrot",
      "Meinard Mülller",
      "TJ Tsai"
    ],
    venue:
      "IEEE International Conference on Acoustic, Speech, and Signal Processsing (ICASSP) 2019",
    status: "Submitted",
    link: null,
    image: "",
    date: "November 2018",
    pdf: "",
    code: "",
    desc:
      "MIDI–sheet music alignment is the task of finding correspondences " +
      "between a MIDI representation of a piece and its corresponding sheet " +
      "music images. Rather than using optical music recognition to bridge " +
      "the gap between sheet music and MIDI, we explore an alternative " +
      "approach: projecting the MIDI data into pixel space and performing " +
      "alignment in the image domain. Our method converts the MIDI data " +
      "into a crude representation of the score that only contains rectangular " +
      "floating notehead blobs, a process we call bootleg score synthesis. " +
      "Furthermore, we project sheet music images into the same bootleg " +
      "space by applying a deep watershed notehead detector and filling " +
      "in the bounding boxes around each detected notehead. Finally, we " +
      "align the bootleg representations using a simple variant of dynamic " +
      "time warping. On a dataset of 68 real scanned piano scores from " +
      "IMSLP and corresponding MIDI performances, our method achieves " +
      "a 97.3% accuracy at an error tolerance of one second, outperforming " +
      "several baseline systems that employ optical music recognition."
  },
  {
    title: "aaa",
    authors: ["aaaa bbbb", "cccc dddd"],
    link: "ccc",
    image: "",
    date: "2015-11-20",
    pdf: "",
    code: "",
    desc: "aaaaaaaaaaaa" + "dsfdfadfadasdasdsad " + " sdfdfsfkdsfjdslfjskdlfj. "
  }
];

export default data;
