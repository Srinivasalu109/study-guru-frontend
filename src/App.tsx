import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Books from "./routes/Books";
import Universities from "./routes/Universities";
import Events from "./routes/Events";
import Progress from "./routes/Progress";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import BookDetails from "./routes/BookDetails";
import Practice from "./routes/Practice";
import Solution from "./routes/Solution";
import SwitchAcount from "./routes/SwitchAcount";
import EditProfile from "./routes/EditProfile";
import Admin from "./routes/Admin";
import AddTopic from "./routes/AddTopic";
import AddBook from "./routes/AddBook";
import AddQuestion from "./routes/AddQuestion";
import AddBookToUniversity from "./routes/AddBookToUniversity";
import AddUniversity from "./routes/AddUniversity";
import AddUniversityToBook from "./routes/AddUniversityToBook";
import AddEvent from "./routes/AddEvent";
import AddTopicToChapter from "./routes/AddTopicToChapter";
import AddChapter from "./routes/AddChapter";
import AddQuestionToTopic from "./routes/AddQuestionToTopic";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/switchAcount" element={<SwitchAcount />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/books/:books" element={<Books />} />
      <Route path="/bookDetails" element={<BookDetails />} />
      <Route path="/universities/:universities" element={<Universities />} />
      <Route path="/events/:events" element={<Events />} />
      <Route path="/progress/:progress" element={<Progress />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/addBook" element={<AddBook />} />
      <Route path="/addUniversity" element={<AddUniversity />} />
      <Route path="/addChapter" element={<AddChapter />} />
      <Route path="/addTopic" element={<AddTopic />} />
      <Route path="/addQuestion" element={<AddQuestion />} />
      <Route path="/addBookToUniversity" element={<AddBookToUniversity />} />
      <Route path="/addUniversityToBook" element={<AddUniversityToBook />} />
      <Route path="/addTopicToChapter" element={<AddTopicToChapter />} />
      <Route path="/AddQuestionToTopic" element={<AddQuestionToTopic />} />
      <Route path="/addUniversity" element={<AddUniversity />} />
      <Route path="/addEvent" element={<AddEvent />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/solution" element={<Solution />} />
    </Routes>
  );
}

export default App;
