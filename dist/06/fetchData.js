export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            return json;
        }
        else {
            throw new Error("Erro: " + response.status);
        }
    }
    catch (error) {
        if (error instanceof Error)
            console.log("fetchData: " + error.message);
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map