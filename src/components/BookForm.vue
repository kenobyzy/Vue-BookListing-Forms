<template>
  <form v-on:submit.prevent="bookSubmit(bookData)" class="" action="#" method="post">
    <input v-model="bookData.bookTitle" type="text" name="title" value="" placeholder="Book Title">
    <input v-model="bookData.bookAuthor" type="text" name="author" value="" placeholder="Book Author">
    <div>
      <input v-model="bookData.finishedReading" type="checkbox" name="finishedReading" />
      <label for="finishedReading">Finished Reading</label>

      <input v-model="bookData.ownership" type="radio" name="borrowed" value="borrowed">
      <label for="borrowed">borrowed</label>

      <input v-model="bookData.ownership" type="radio" name="bought" value="bought">
      <label for="bought">bought</label>
    </div>
    <button type="submit" name="button">Add Book</button>
  </form>
</template>

<script>
export default {
  name: "BookForm",
  props: ["books"],
  data() {
    return {
      bookData: {
        bookTitle: "",
        bookAuthor: "",
        finishedReading: false,
        ownership: []
      }
    };
  },
  methods: {
    bookSubmit(bookData) {
      this.$emit("addBook", bookData);
    }
  }
};
</script>

<style>

</style>
