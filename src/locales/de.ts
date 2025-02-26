/* eslint max-len:0 */
const lang = {
  no_tasks: 'Kann keine Aufgaben nicht messen.',
  duplicate_task_id: 'Die id %1% is wird mehrfach genutzt.',
  invalid_key: 'Der Schlüssel %1% ist ungültig.',
  finished_analyzing: 'Analyse von %1% abgeschlossen.',
  initialization: 'Bereite Aufgaben vor um %1% Threads x %2% Wiederholungen zu haben',
  starting_result: 'Starte Ergebnisbehandlung.',
  data: 'Daten',
  done: 'Fertig',
  starting_workers: 'Starte %1% Arbeiter.',
  starting_after: 'Starte nachgelagerte Anfragen.',
  no_after: 'Keine nachgelagerten Anfragen, fertig.',
  finished_requests: 'Alle %1% angefragt.',
  starting_analyzation: 'Starte Analyse von %1%.',
  next_request: 'Starte nächste Anfrage.',
  starting_validation: 'Starte Überprüfung von %1%.',
  end_thread: 'Alle Anfragen abgeschlossen, beende Thread.',
  after_done: 'Nachgelagerte Anfragen abgeschlossen.',
  no_response_status: 'Anfrage bekam keinen Status zurück',
  response_status_above_2xx: 'Anfrage bekam einen Status oberhalb von 200-299 zurück',
  response_status_below_2xx: 'Anfrage bekam einen Status unterhalb von 200-299 zurück',
  response_status_not_404: 'Anfrage bekam Status %1% zurück, nicht 404',
  response_status_not_403: 'Anfrage bekam Status %1% zurück, nicht 403',
  variable_default_value: 'Kann variablen Standardwert von %1% nicht verarbeiten.',
  name_invalid: 'Ungültiger Projektname.',
  already_created: 'Projektordner existiert bereits.',
  no_content_type: 'Kein content-type header vorhanden.',
  no_json_content_type: 'Der content-type %1% ist nicht application/json.',
  invalid_json_body: 'Der JSON-Inhalt ist ungültig. %1%',
  openapi_invalid: 'Das Open-Api-Dokument ist ungültig, bitte auf Fehler überprüfen!',
  no_openapi_document_given: 'Es wurde kein Pfad zu einem Open-Api-Dokument angegeben.',
  no_xml_content_type: 'Der content-type %1% ist nicht */xml.',
  invalid_xml_body: 'Der XML-Inhalt ist ungültig.',
  too_slow: 'Die Antwortzeit lag oberhalb von %1% ns.',
  maximum_below_threads: 'Das Maximum ist geringer als die Startzahl der Threads.',
  increment_below_one: 'Jeder Durchlauf muss die Threadzahl verändern. Aktuell ist die Änderung unter eins.',
  maximum_below_one: 'Das Maximum kann nicht kleiner als eins sein.',
  server_header_is_set: 'Der header Server ist gesetzt. Für eine erhöhte Sicherheit sollte dieser entfernt werden.',
  powered_by_is_set: 'Der header X-Powered-By ist gesetzt. Dieser teilt kritische Informationen über die Infrastruktur mit der Welt.',
};

export default lang;
