export class Personne {
  constructor(private _num?: number, private _nom?: string, private _prenom?: string) { }
      getnum() {
      return this._num;
      }
      setnum(_num: number) {
      this._num = _num;
      }
      getnom() {
      return this._nom;
      }
      setnom(_nom: string) {
      this._nom = _nom;
      }
      getprenom() {
      return this._prenom;
      }
      setprenom(_prenom: string) {
      this._prenom = _prenom;
      }
}

