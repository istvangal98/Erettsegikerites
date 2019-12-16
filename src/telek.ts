// Megjegyzések stílusa: JSDoc 3 -> http://usejsdoc.org/

/** Egy telket leíró osztály */
export default class Telek {
  public static hazszamReset(): void {
    Telek.aktParatlanHazszam = 1;
    Telek.aktParosHazszam = 2;
  }

  private static aktParosHazszam: number = 2;
  private static aktParatlanHazszam: number = 1;
  private hazszam: number;
  private szelesseg: number;
  private szin: string;

  /** Az osztály konstruktora
   * @constructor1
   * @param {string} sor A forrás file egy sora
   */
  public constructor(sor: string) {
    const m: string[] = sor.split(" ");
    if (m.length !== 3) throw new Error("Hibás forrás!");
    if (m[0] === "0") {
      this.hazszam = Telek.aktParosHazszam;
      Telek.aktParosHazszam += 2;
    } else {
      this.hazszam = Telek.aktParatlanHazszam;
      Telek.aktParatlanHazszam += 2;
    }

    this.szelesseg = parseInt(m[1], 10);
    if (Number.isNaN(this.szelesseg)) throw new Error("Hibás forrás!");

    this.szin = m[2];
    if (!/^[A-Z:#]$/.test(this.szin)) {
      throw new Error("Hibás forrás!");
    }
  }

  // 3. feladathoz
  public get oldal(): string {
    return this.hazszam % 2 === 0 ? "páros" : "páratlan";
  }

  // 3. feladathoz
  public get hazSzama(): number {
    return this.hazszam;
  }

  // 4. feladathoz
  public get paratlanOldali(): boolean {
    return this.hazszam % 2 === 1;
  }

  // 4. feladathoz
  public get keritesSzine(): string {
    return this.szin;
  }

  // 6. feladathoz
  public get telekSzelessege(): number {
    return this.szelesseg;
  }
}
