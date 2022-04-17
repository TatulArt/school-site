const teachersList = [
  {
    name: "Давыдченко Юлия Ивановна",
    position: "Директор школы и Учитель Географии",
  },
  {
    image: require("../../assets/TeachersPhotos/060831416bc0652124ebff5f40336af7.png"),
    name: "Коваленко Оксана Николаевна",
    position: "Заместитель директора",
  },
  {
    name: "Липатова Галина Евгеньевна",
    position: "Заместитель директора по воспитательной работе",
  },
  {
    name: "Назарова Ольга Юрьевна",
    position: "Заместитель директора по административно-хозяйственной работе",
  },
  {
    name: "Павленко Крестина Владимировна",
    position: "Учитель математики",
  },
  {
    name: "Панков Анатолий Евгеньевич",
    position: "Учитель Физической культуры и ОБЖ",
  },
  {
    name: "Негина Ирина Анатольевна",
    position: "Учитель Русского языка и Литературы",
  },
  {
    name: "Божко Маргарита Викторовна",
    position: "Учитель английского языка",
  },
].map((teacher) => {
  if (!teacher.image) {
    teacher.image = require("../../assets/Shared/defaultImage.svg");
  }

  return teacher;
});

export default teachersList;
