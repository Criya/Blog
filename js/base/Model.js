window.Model = function (options) {
    let keyId = options.keyId;
    let resourceName = options.resourceName;

    return {
        init: function () {
            AV.init(keyId)
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find();
        },
        save: function (messageObj) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            x.save(messageObj)
        }
    }
}