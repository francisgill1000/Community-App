export async function fetchActiveDevices(axios, company_id) {
    try {
        const { data } = await axios.get(`device`, {
            params: {
                per_page: 1000,
                company_id: company_id,
                sortBy: "status_id",
            },
        });
        return data.data
            .filter((el) => el.status.name === "active")
            .map((e) => e.device_id);
    } catch (error) {
        console.error("Error fetching devices:", error);
        throw error;
    }
}
