/*****************************************************************************/
/* AdminCard: Event Handlers */
/*****************************************************************************/
Template.AdminCard.events({
  'click #saveCard': function (event) {
    event.preventDefault();

    name = event.target.form.querySelector('#profileName').value;

    console.log(name);
  }
});

/*****************************************************************************/
/* AdminCard: Helpers */
/*****************************************************************************/
Template.AdminCard.helpers({
});

/*****************************************************************************/
/* AdminCard: Lifecycle Hooks */
/*****************************************************************************/
Template.AdminCard.created = function () {
};

Template.AdminCard.rendered = function () {
};

Template.AdminCard.destroyed = function () {
};
