import logo from './img/logo.svg';
import logoBackground from './img/logo_background.svg';

export const Logo = () => {
    return (
			<div
				className="logo-container bg-no-repeat w-full h-56 bg-center relative"
				style={{ backgroundImage: `url(${logoBackground})` }}
			>
				<div className="logo flex w-full h-full justify-center items-end pb-4">
					<img src={logo} className="h-24" alt="" />
				</div>
			</div>
		);
};
