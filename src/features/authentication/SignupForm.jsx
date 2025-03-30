import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSignup } from './useSignup';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  function onSubmit({ fullName, email, password }) {
    console.log('Form submitted', { fullName, email, password });
    signup({ fullName, email, password }, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register('fullName', {
            required: 'Full name is required',
            pattern: {
              value: /^[a-zA-Z ]+$/,
              message: 'Please provide a valid name',
            },
          })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: 'Please repeat your password',
            validate: (value) =>
              value === getValues().password || 'Passwords do not match',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          onClick={reset}
          disabled={isLoading}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
