<template>
  <div id="commentsMaker" class="mb-5">
    <div id="commentsForm" class="container d-md-flex justify-content-end">
      <div id="formHeading" class="heading-section heading-section-white"></div>
      <div id="formBody">
        <form id="form" action="#">
          <div class="d-md-flex justify-content-between">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Имя" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Фамилия" />
            </div>
          </div>
          <div class="d-md-flex justify-content-between">
            <div class="form-group">
              <div class="form-field">
                <select id="positionSelect" class="form-select form-control">
                  <option>Выберите ваш статус</option>
                  <option value="student">Ученик</option>
                  <option value="teacher">Учитель</option>
                  <option value="parent">Родитель</option>
                  <option value="admin">Администратор</option>
                  <option value="other">Иное</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Телефон" />
            </div>
          </div>
          <div class="d-md-flex justify-content-between">
            <div class="form-group">
              <textarea
                name=""
                id=""
                cols="30"
                rows="2"
                class="form-control"
                placeholder="Комментарий"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                id="submitBtn"
                type="submit"
                value="Отправить"
                class="btn btn-secondary py-3 px-4"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCommentsMaker",
};
</script>

<style scoped>
#commentsMaker {
  background-color: #1eaaf1;
  padding-top: 1em;
}

#commentsForm {
  margin-right: 2em;
}

#commentsMaker .form-control {
  background: transparent;
  border: transparent;
  background-color: transparent;
  border-radius: 0%;
  border-bottom: solid 1px #ccc;
  font-size: 16px;
  height: 58px;
  margin-bottom: 1em;
  padding-left: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-control,
.form-control::placeholder {
  color: #ccc;
}

#submitBtn {
  background: #fda638;
  border: 1px solid #fda638;
  color: #fff;
  margin-left: 1em;
  margin-bottom: 1em;
}

input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: 0 0 0 1000px #1eaaf1 inset;
  -webkit-box-shadow: 0 0 0 1000px #1eaaf1 inset;
  -webkit-text-fill-color: #ccc;
}
</style>
