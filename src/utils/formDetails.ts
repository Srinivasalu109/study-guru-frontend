const bookDetails = {
  bookId: "",
  bookName: "",
  author: "",
  volume: "",
  description: "",
};

const topicDetails = {
  bookId: "",
  chapterId: "",
  topicId: "",
  topicName: "",
};

const chapterDetails = {
  bookId: "",
  chapterId: "",
  subject: "",
  chapterName: "",
};

const questionDetails = {
  bookId: "",
  chapterId: "",
  question: "",
  questionId: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  anwser: "",
  solution: "",
};

const universityDetails = {
  universityId: "",
  universityName: "",
  state: "",
  city: "",
  nirf: "",
};

const bookToUniversityDetails = {
  universityId: "",
  bookId: "",
  bookName: "",
  author: "",
  subject: "",
  description: "",
  volume: "",
};

const universityToBookDetails = {
  bookId: "",
  universityId: "",
  universityName: "",
  state: "",
  city: "",
  nirf: "",
};

const topicToChapterDetails = {
  bookId: "",
  chapterId: "",
  topicId: "",
  topicName: "",
};

const questionToTopicDetails = {
  bookId: "",
  chapterId: "",
  topicId: "",
  question: "",
  optionId1: "",
  optionId2: "",
  optionId3: "",
  optionId4: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  anwser: "",
  solution: "",
};

const eventDetails = {
  eventId: "",
  eventName: "",
  time: "",
  universityName: "",
  location: "",
  branch: "",
};

export {
  bookDetails,
  topicDetails,
  chapterDetails,
  questionDetails,
  universityDetails,
  bookToUniversityDetails,
  universityToBookDetails,
  topicToChapterDetails,
  questionToTopicDetails,
  eventDetails,
};
