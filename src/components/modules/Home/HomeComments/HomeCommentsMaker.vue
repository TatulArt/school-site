<template>
  <div id="commentsMaker" class="mb-5">
    <div id="commentsForm" class="d-md-flex justify-content-end">
      <div id="formContainer" class="py-5">
        <div data-aos="fade-up">
          <div id="formHeading" class="pb-5">
            <h2 class="mb-3">Оставьте Комментарий!</h2>
            <p>
              Здесь вы можете написать собственный комментарий, который будут
              видеть и другие пользователи нашего сайта!
            </p>
          </div>
          <div class="" id="formBody">
            <form id="form" action="#">
              <div class="d-md-flex justify-content-between">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Имя" />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Фамилия"
                  />
                </div>
              </div>
              <div class="d-md-flex justify-content-between">
                <div class="form-group">
                  <div class="form-field">
                    <select
                      id="positionSelect"
                      class="form-select form-control"
                    >
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
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Телефон"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group mb-4 col-md-8">
                  <textarea
                    id="commentTextArea"
                    class="form-control"
                    placeholder="Комментарий"
                  ></textarea>
                </div>
                <div class="form-group mb-4 col-md-4">
                  <input
                    id="submitBtn"
                    type="submit"
                    value="Отправить"
                    class="btn btn-secondary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
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
  background-image: url("../../../../assets/Common/school.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  background-position: 0% 100%;
  background-color: #1eaaf1;
  color: #fff;
  text-align: left;
}

#formContainer {
  background-color: #1eaaf1;
  padding: 2em;
}

#formHeading {
  max-width: 500px;
}

#commentTextArea {
  padding-bottom: 0 !important;
}

#commentsMaker .form-control {
  background: transparent;
  border: transparent;
  background-color: transparent;
  border-radius: 0%;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  font-size: 16px;
  height: 60px;
  padding: 0;
  min-width: 240px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-group {
  margin-bottom: 2em;
}

#positionSelect option {
  background-color: #212529;
}

.form-control,
.form-control::placeholder {
  color: #fff;
}

#submitBtn {
  width: 100%;
  background: #fda638;
  border: 1px solid #fda638;
  color: #fff;
  height: 3.8em;
}

input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: 0 0 0 1000px #1eaaf1 inset;
  -webkit-box-shadow: 0 0 0 1000px #1eaaf1 inset;
  -webkit-text-fill-color: #fff;
}
</style>
