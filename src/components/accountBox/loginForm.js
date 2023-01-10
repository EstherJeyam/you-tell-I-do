import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
      <label for="email" class="label">Email</label>
						<input type="email" name="email"  id="email" class="input" autocomplete="off" placeholder="email@example.com" oninput="this.setCustomValidity('')" required />
        <label for="password" class="label">Password</label>
						<input type="password" name="password" id="password" class="input" oninput="this.setCustomValidity('')" required />
						{/* <span class="tooltiptext">Must include:</span> */}
            <div class="row">
						<label class="label">Role</label>
						<div class="role">
							<input type="radio" id="master" name="role" value="master" required />
							<label for="master" class="master">Master</label>
							<input type="radio" id="student" name="role" value="student" required />
							<label for="student">Student</label>
						</div>
					</div>
					
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" href="signupForm.js">Login</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}