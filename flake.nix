{
  description = "Sky Games Go";
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  outputs = { self,nixpkgs }@inputs:
  let
  system = "x86_64-linux";
  specialArgs = {inherit self inputs;};
  lib = nixpkgs.lib;
  pkgs = import nixpkgs { inherit system; };
  in {
    defaultPackage.${system} = pkgs.buildNpmPackage {
     name = "sky-games-go";
     src = ./.;
     npmDepsHash = "sha256-xY9hGV5fyJ7MceSVWlNEUfZ4lrjCfSy91W5pyik09Sc=";
    #  dontNpmBuild = true;
    };
  };
}
