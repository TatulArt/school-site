const commentsList = [
  {
    quote:
      "Замечательная школа, опытные и чуткие педагоги. Коммуникабельный директор, образованный и тактичный.",
    name: "Махрова Наталья Сергеевна",
    position: "Родитель",
  },
  {
    quote:
      "Мне очень нравится моя школа, но я бы хотела что бы у нас в школе улучшилось питание.",
    name: "Шмидт Светлана Сергееана",
    position: "Ученик",
  },
].map((comment) => {
  if (!comment.image) {
    comment.image = require("../../assets/Shared/defaultImage.svg");
  }

  return comment;
});

export default commentsList;
