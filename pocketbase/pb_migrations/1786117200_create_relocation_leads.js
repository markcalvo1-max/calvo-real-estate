/// <reference path="../pb_data/types.d.ts" />
migrate(
    (app) => {
        const collection = new Collection({
            name: 'relocation_leads',
            type: 'base',
            listRule: null,
            viewRule: null,
            createRule: '',
            updateRule: null,
            deleteRule: null,
            fields: [
                { name: 'name', type: 'text', required: true, max: 120 },
                { name: 'email', type: 'email', required: true },
                { name: 'ca_city', type: 'text', required: true, max: 120 },
                { name: 'move_date', type: 'text', required: true, max: 60 },
                { name: 'message', type: 'text', required: false, max: 2000 },
                { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
            ],
        });

        app.save(collection);
    },
    (app) => {
        const collection = app.findCollectionByNameOrId('relocation_leads');
        app.delete(collection);
    },
);
