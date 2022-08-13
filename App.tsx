import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './style.css';

export interface ILoginForm {
  username: string;
  password: string;
}

export default function App() {
  const formHook = useForm<ILoginForm>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data);

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      formHook.trigger();
    }
  };

  return (
    <form onSubmit={formHook.handleSubmit(onSubmit)}>
      <div className="row">
        <label>Username: </label>
        <input
          type="text"
          {...formHook.register('username', { required: true })}
          onKeyDown={handleOnKeyDown}
        />
        {formHook.formState.errors.username && (
          <div className="err">Username is required</div>
        )}
      </div>
      <div className="row">
        <label>Password: </label>
        <input
          type="text"
          {...formHook.register('password', { required: true })}
          onKeyDown={handleOnKeyDown}
        />
        {formHook.formState.errors.password && (
          <div className="err">Password is required</div>
        )}
      </div>
      <div className="row">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
