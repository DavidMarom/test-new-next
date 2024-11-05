import http from "@/services/http";

export async function getAllBooks() {
    try {
        const response = await http.get("/books");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

