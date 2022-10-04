import { Formik, Form, Field } from "formik";

export const BlogPostForm = () => {
    return (
        <div>
            <h1>Testando Post com formulário</h1>
            <Formik
                initialValues={{
                    title: "",
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <label htmlFor="title">Post Title</label>
                    <Field
                        id="title"
                        name="title"
                        placeholder="Post Title"
                    ></Field>
                    <button>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
