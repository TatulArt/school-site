<template>
  <div class="container">
    <div class="row d-flex align-items-stretch no-gutters">
      <div class="col-md-6 p-4 p-md-5 order-md-last bg-light">
        <form action="#">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Ваше Имя" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Ваш E-mail" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Тема" />
          </div>
          <div class="form-group">
            <textarea
              name=""
              id=""
              class="form-control"
              placeholder="Сообщение"
            ></textarea>
          </div>
          <div class="form-group">
            <input
              id="submit-btn"
              type="submit"
              value="Отправить cообщение"
              class="btn py-3 px-5"
            />
          </div>
        </form>
      </div>
      <div class="col-md-6 p-0">
        <div>
          <GoogleMap
            api-key="AIzaSyAAyNwvTYWZGYG67nr_xs5vEQHrDaS4JSk"
            style="width: 100%; height: 600px"
            :center="center"
            :zoom="17"
          >
            <Marker :options="{ position: center }" />
          </GoogleMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  name: "ContactInfoBottom",
  components: { GoogleMap, Marker },

  setup() {
    const center = { lat: 44.09904125389106, lng: 39.059599621877375 };

    return { center };
  },
});
</script>

<style scoped>
.form-control {
  height: 52px !important;
  background: #fff !important;
  color: #000000 !important;
  font-size: 18px;
  border-radius: 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
}

textarea.form-control {
  height: 230px !important;
}

#submit-btn {
  background-color: #1eaaf1;
  color: #fff;
}
input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: 0 0 0 1000px white inset;
  -webkit-box-shadow: 0 0 0 1000px white inset;
  -webkit-text-fill-color: #6c757d;
}
</style>
