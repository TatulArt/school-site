<template>
  <footer class="bg-dark pb-5">
    <div class="container">
      <div class="row justify-content-center mb-5" id="footer-main">
        <div class="col-md-6 col-lg-4 mx-5" id="footerInfo">
          <h4 class="mb-5">Есть Вопросы?</h4>
          <div id="footerInfoList">
            <div class="d-flex align-items-center" id="footerInfoItem">
              <img
                src="../../assets/Shared/geopoint.png"
                id="footerInfoItemIcon"
              />
              <span id="footerInfoItemtext">
                Краснодарский край, Туапсинский р-н,<br />г. Туапсе, ул.
                Горького 40
              </span>
            </div>
            <div id="footerInfoItem">
              <img
                src="../../assets/Shared/letter.png"
                id="footerInfoItemIcon"
              />
              <span id="footerInfoItemtext">sosh4tuapse@gmail.com</span>
            </div>
            <div id="footerInfoItem">
              <img
                src="../../assets/Shared/phone.png"
                id="footerInfoItemIcon"
              />
              <span id="footerInfoItemtext">2-72-42</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mx-5" id="footerForm">
          <h4 class="mb-5">Подпишитесь на нас!</h4>
          <form action="#" class="subscribe-form">
            <div class="form-group">
              <input
                id="emailInput"
                type="text"
                class="form-control mb-2 text-center"
                placeholder="Введите ваш E-mail"
              />
              <input
                id="submitInput"
                type="submit"
                value="Подписаться"
                class="form-control submit px-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center align-items-center">
      <span id="footer-signature">
        Этот сайт был создан Татульян Артёмом, учеником 9 класса, в качестве
        индивидуального школьного проекта (2022)
      </span>
    </div>
  </footer>
</template>

<style scoped>
* {
  color: #fff;
}

footer {
  padding-top: 6em;
}

span {
  color: rgba(255, 255, 255, 0.7);
}

#footerInfoItemIcon {
  margin-right: 1em;
}

#footerInfoItemIcon {
  height: 1em;
  object-fit: contain;
}

#footerInfoItem {
  margin-bottom: 1em;
}

#footer-signature {
  text-align: center;
}

#emailInput {
  height: 52px;
  background: #393939;
  font-weight: bold;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 2px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#submitInput {
  height: 52px;
  background: #5d50c6;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  border: none;
  border-radius: 2px;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
