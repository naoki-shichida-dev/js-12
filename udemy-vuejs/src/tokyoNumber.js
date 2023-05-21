export const tokyoNumber = {
    data() {
        return {
            temData: "hello",
            title: "welcome to Tokyo"
        }
    },
    filters: {
        lowerCase(value) {
            return value.lowerCase();
        }
    }
}