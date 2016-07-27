// app/pods/components/contrib-manager/component.js
import Ember from 'ember';
import layout from './template';
import permissions from 'ember-osf/const/permissions';

export default Ember.Component.extend({
    READ: permissions.READ,
    WRITE: permissions.WRITE,
    ADMIN: permissions.ADMIN,
    layout: layout,
    permissionChanges: {},
    bibliographicChanges: {},
    tagName: '',
    classNames: ['contributors'],
    actions: {
        addContributor(userId, permission, isBibliographic) {
            this.sendAction('addContributor', userId, permission, isBibliographic);
        },
        removeContributor(contrib) {
            this.sendAction('removeContributor', contrib);
        },
        permissionChange(contributor, permission) {
            this.set(`permissionChanges.${contributor.id}`, permission.toLowerCase());
        },
        bibliographicChange(contributor, isBibliographic) {
            this.set(`bibliographicChanges.${contributor.id}`, isBibliographic);
        },
        updateContributors() {
            this.sendAction(
                'editContributors',
                this.get('contributors'),
                this.get('permissionChanges'),
                this.get('bibliographicChanges')
            );
        }
    }
});
