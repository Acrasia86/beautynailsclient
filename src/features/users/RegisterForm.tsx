import { Formik, Form, ErrorMessage } from "formik";
import { observer } from "mobx-react";
import React from "react";
import { Button, Label } from "semantic-ui-react";
import MyTextInput from "../../components/MyTextInput";
import userStore from "../../stores/userStore";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ValidationErrors from "../../errors/ValidationErrors";

export const RegisterForm = () => {
  const { register } = userStore;
  return (
    <Formik
      initialValues={{
        displayName: "",
        userName: "",
        email: "",
        password: "",
        birthDay: "",
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        register(values).catch((error) =>
          setErrors({ error: "Invalid email or password!" })
        )
      }
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        userName: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        birthDay: Yup.string(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form className="ui form error" onSubmit={handleSubmit}>
          <label
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "10px",
            }}
          >
            Namn
          </label>
          <MyTextInput placeholder="Namn" name="displayName" />
          <label
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "10px",
            }}
          >
            Användarnamn
          </label>
          <MyTextInput placeholder="Användarnamn" name="userName" />
          <label
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "10px",
            }}
          >
            Födelsedag
          </label>
          <MyTextInput placeholder="Födelsedag" name="birthDay" type="date" />
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
            Lösenord
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
            disabled={!isValid || !dirty || isSubmitting}
            loading={isSubmitting}
            positive
            content="Registrera"
            type="submit"
            fluid
          />
        </Form>
      )}
    </Formik>
  );
};

export default observer(RegisterForm);
