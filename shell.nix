with import <nixpkgs> {};
let unstable = import <unstable> {};
in mkShell {
	buildInputs = [
		nodejs unstable.nodePackages.pnpm
		nodePackages.vercel
	];
}
