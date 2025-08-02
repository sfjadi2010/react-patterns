import "./App.css";
import Regular from "./components/list/Regular";
import NumberedList from "./components/list/NumberedList";
import SmallAuthorList from "./components/authors/SmallAuthorList";
import LargeAuthorList from "./components/authors/LargeAuthorList";
import SmallBookList from "./components/books/SmallBookList";
import LargeBookList from "./components/books/LargeBookList";
import Modal from "./Modal";

import { authors } from "./data/authors";
import { books } from "./data/books";

const App = () => {
  return (
    <>
      <>
        {/* <h2>Authors</h2>
      <Regular
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorList}
      />
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorList}
      />
      <hr />
      <h2>Books</h2>
      <Regular
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookList}
      />
      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookList}
      /> */}
      </>
      <Modal>
        <NumberedList
          items={authors}
          sourceName={"author"}
          ItemComponent={LargeAuthorList}
        />
      </Modal>
    </>
  );
};

export default App;
