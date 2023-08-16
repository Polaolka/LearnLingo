import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/Styled/Button.styled";
import { TeachersStyled } from "./Teachers.styled";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { getAllTeachers } from "redux/teachers/teachersOperations";
import Filter from "components/Filter/Filter";
import Container from "components/Container/Container";
import { Caption } from "components/Form/Form.styled";
import { Loader } from "components/Loader/Loader";

const CARDS_COUNT = 4;

function Teachers() {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const teachers = useSelector((state) => state.teachers.teachers);
  const isLoading = useSelector((state) => state.loading.isLoading);

  const [languageFilter, setLanguageFilter] = useState(false);
  const [levelFilter, setLevelFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  const [teachersLimit, setTeachersLimit] = useState(CARDS_COUNT);

  const filteredTeachers = teachers?.filter((teacher) => {
    if (!languageFilter && !levelFilter && !priceFilter) {
      return true;
    }
    const languageFilterResult =
      !languageFilter || teacher.languages.includes(languageFilter);
    const levelFilterResult =
      !levelFilter || teacher.levels.includes(levelFilter);
    const priceFilterResult =
      !priceFilter || `${teacher.price_per_hour}` === priceFilter;

    return languageFilterResult && levelFilterResult && priceFilterResult;
  });

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  const loadMoreHandle = () => {
    setTeachersLimit((prevCount) => prevCount + CARDS_COUNT);
  };
  const displayedTeachers = filteredTeachers?.slice(0, teachersLimit);

  return (
    <Container>
      <Filter
        teachers={teachers}
        setLanguageFilter={(data) => setLanguageFilter(data)}
        setLevelFilter={(data) => setLevelFilter(data)}
        setPriceFilter={(data) => setPriceFilter(data)}
      />
      {isLoading?(<Loader/>):(<TeachersStyled>
        {displayedTeachers?.length > 0 ? (
          displayedTeachers?.map((el) => (
            <TeacherCard key={el.id} teacher={el} levelFilter={levelFilter} />
          ))
        ) : (
          <Caption>Unfortunately, no teacher was found.</Caption>
        )}
      </TeachersStyled>)}
      {filteredTeachers?.length > CARDS_COUNT && (
        <Button onClick={loadMoreHandle} className="loadMore">
          Load more
        </Button>
      )}

      <div ref={scrollRef} style={{ marginTop: "40px" }}></div>
    </Container>
  );
}

export default Teachers;

