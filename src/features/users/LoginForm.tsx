import { Formik, Form, ErrorMessage } from "formik";
import { observer } from "mobx-react";
import React from "react";
import { Button, Label } from "semantic-ui-react";
import MyTextInput from "../../components/MyTextInput";
import userStore from "../../stores/userStore";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { login } = userStore;
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "", error: null }}
      onSubmit={(values, { setErrors }) =>
        login(values).catch((error) =>
          setErrors({ error: "Invalid email or password!" })
        )
      }
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form className="ui form" onSubmit={handleSubmit}>
          <label
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "10px",
            }}
          >
            Email
          </label>
          <MyTextInput placeholder="Email" name="email" />
          <label
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "10px",
            }}
          >
            Password
          </label>
          <MyTextInput placeholder="Password" name="password" type="password" />
          <ErrorMessage
            name="error"
            render={() => (
              <Label
                style={{ marginBottom: 10 }}
                basic
                color="red"
                content={errors.error}
              />
            )}
          />
          <Button
            loading={isSubmitting}
            positive
            content="Login"
            type="submit"
            fluid
          />
        </Form>
      )}
    </Formik>
  );
};

export default observer(LoginForm);
