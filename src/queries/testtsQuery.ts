const getAllTest = {
	text: "SELECT * FROM public.admin",
};

const postTest = {
	text: "INSERT INTO public.admin (username, email, password) VALUES ($1, $2, $3)",
	values: ["test"],
};

const getTestById = {
	text: "SELECT * FROM public.admin WHERE id = $1",
};

export { getAllTest, postTest, getTestById };
