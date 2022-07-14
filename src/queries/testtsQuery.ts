const getAllTest = {
	text: "SELECT * FROM testts",
};

const postTest = {
	text: "INSERT INTO public.testts (username, email, pin) VALUES ($1, $2, $3)",
	values: ["test"],
};

const getTestById = {
	text: "SELECT * FROM public.testts WHERE id = $1",
};

export { getAllTest, postTest, getTestById };
