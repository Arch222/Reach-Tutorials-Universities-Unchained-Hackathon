'reach 0.1';
//Defines what a player can do within the given rules and parameters. 
//Enables the participants(Alice and Bob) to play the game with different hands

const Player =
      { getHand: Fun([], UInt),
        seeOutcome: Fun([UInt], Null) };

export const main =
  Reach.App(
    {},
    [Participant('Alice', Player), Participant('Bob', Player)],
    (A, B) => {
      A.only(() => {
        const handA = declassify(interact.getHand()); });
      A.publish(handA);
      commit();

      B.only(() => {
        const handB = declassify(interact.getHand()); });
      B.publish(handB);

      const outcome = (handA + (4 - handB)) % 3;
      commit();

      each([A, B], () => {
        interact.seeOutcome(outcome); });
      exit(); });