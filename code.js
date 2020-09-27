onEvent("startButton", "click", function( ) {
  setScreen("scienceSelectionScreen");
});
onEvent("solidButton", "click", function( ) {
  setScreen("solidScreen");
});
onEvent("liquidButton", "click", function( ) {
  setScreen("liquidScreen");
});
onEvent("gasButton", "click", function( ) {
  setScreen("gasScreen");
});
onEvent("liquidToSelectionButton", "click", function( ) {
  setScreen("stateSelectionScreen");
});
onEvent("gasToSelectionButton", "click", function( ) {
  setScreen("stateSelectionScreen");
});
onEvent("solidToSelectionButton", "click", function( ) {
  setScreen("stateSelectionScreen");
});
onEvent("scienceSelectionScreentoHomeScreenButton", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("chemistryButton", "click", function( ) {
  setScreen("chemistryScreen");
});
onEvent("chemistryScreentoScienceSelectionScreenButton", "click", function( ) {
  setScreen("scienceSelectionScreen");
});
onEvent("statesOfMatterButton", "click", function( ) {
  setScreen("stateSelectionScreen");
});
onEvent("selectionToHomeScreen", "click", function( ) {
  setScreen("chemistryScreen");
});
