const teachersList = [
  {
    name: "Давыдченко Юлия Ивановна",
    position: "Директор школы и Учитель Географии",
  },
  {
    image: require("../../assets/TeachersPhotos/060831416bc0652124ebff5f40336af7.jpg"),
    name: "Коваленко Оксана Николаевна",
    position: "Заместитель директора",
  },
  {
    name: "Панков Анатолий Евгеньевич",
    position: "Учитель Физической культуры и ОБЖ",
  },
  {
    name: "Негина Ирина Анатольевна",
    position: "Учитель Русского языка и Литературы",
  },
].map((teacher) => {
  if (!teacher.image) {
    teacher.image = require("../../assets/TeachersPhotos/defaultImage.svg");
  }

  return teacher;
});

export default teachersList;
