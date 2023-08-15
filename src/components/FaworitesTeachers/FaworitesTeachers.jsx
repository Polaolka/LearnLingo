import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/Styled/Button.styled";
import { FaworitesTeachersStyled } from "./FaworitesTeachers.styled";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { getAllTeachers } from "redux/teachers/teachersOperations";
import Filter from "components/Filter/Filter";

const CARDS_COUNT = 3;

function FaworitesTeachers() {

  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const teachers = useSelector((state) => state.teachers.teachers);

  const [languageFilter, setLanguageFilter] = useState(false);
  const [levelFilter, setLevelFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  const [teachersLimit, setTeachersLimit] = useState(CARDS_COUNT);

  const favTeachersArr = useSelector((state) => state.user.favTeachers);

  const filteredTeachers = teachers?.filter(teacher => favTeachersArr.includes(teacher.id));

  const filteredTeachersOnSelect = filteredTeachers?.filter((teacher) => {
    if (!languageFilter && !levelFilter && !priceFilter) {
      return true;
    }
    const languageFilterResult = !languageFilter || teacher.languages.includes(languageFilter);
    const levelFilterResult = !levelFilter || teacher.levels.includes(levelFilter);
    const priceFilterResult = !priceFilter || `${teacher.price_per_hour}` === priceFilter;
    
    return languageFilterResult && levelFilterResult && priceFilterResult;
  });

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  const displayedTeachers = filteredTeachersOnSelect?.slice(0, teachersLimit);
  const loadMoreHandle = () => {
    setTeachersLimit((prevCount) => prevCount + CARDS_COUNT);
  };


  return (
    <>
        <Filter
            teachers={teachers}
            setLanguageFilter={(data) => setLanguageFilter(data)}
            setLevelFilter={(data) => setLevelFilter(data)}
            setPriceFilter={(data) => setPriceFilter(data)}/>
      <FaworitesTeachersStyled>
        {displayedTeachers.map((el) => (
          <TeacherCard key={el.id} teacher={el} />
        ))}
      </FaworitesTeachersStyled>
      <Button onClick={loadMoreHandle} className="loadMore">Load more</Button>
      
      <div ref={scrollRef} style={{ marginTop: "100px" }}></div>
    </>
  );
}

export default FaworitesTeachers;
