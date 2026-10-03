export const locales = [
  ["en-US", "us", "English"],
  ["pt-BR", "br", "Português"],
  ["es-ES", "es", "Español"],
  ["fr-FR", "fr", "Français"],
  ["de-DE", "de", "Deutsch"],
  ["it-IT", "it", "Italiano"],
  ["nl-NL", "nl", "Nederlands"],
  ["pl-PL", "pl", "Polski"],
  ["tr-TR", "tr", "Türkçe"],
  ["ru-RU", "ru", "Русский"],
  ["ar-SA", "sa", "العربية"],
  ["hi-IN", "in", "हिन्दी"],
  ["zh-CN", "cn", "中文"],
  ["ja-JP", "jp", "日本語"],
  ["ko-KR", "kr", "한국어"],
] as const;

export type Locale = (typeof locales)[number][0];

export type Copy = {
  navExamples: string;
  install: string;
  language: string;
  theme: string;
  beta: string;
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPoint1: string;
  heroPoint2: string;
  seeExamples: string;
  setupKicker: string;
  setupTitle: string;
  setupBody: string;
  setupPoints: string[];
  activitiesKicker: string;
  activitiesTitle: string;
  activitiesBody: string;
  activitiesPoints: string[];
  examplesKicker: string;
  examplesTitle: string;
  timelineTitle: string;
  timelineText: string;
  calendarTitle: string;
  calendarText: string;
  betaTitle: string;
  betaText: string;
  finalTitle: string;
  finalBody: string;
  coffee: string;
  madeWith: string;
  analyticsText: string;
  analyticsAccept: string;
  analyticsReject: string;
  altOverview: string;
  altActivities: string;
  altTimeline: string;
  altCalendar: string;
};

export const copy: Record<Locale, Copy> = {
  "en-US": {
    navExamples: "Examples", install: "Install in Figma", language: "Change language", theme: "Change theme", beta: "Beta",
    eyebrow: "Figma plugin", heroTitle: "Clear timelines, built inside Figma.", heroBody: "Turn dates and activities into presentation-ready timelines or calendars. Configure, preview, and create without drawing every block by hand.", heroPoint1: "Editable Figma output", heroPoint2: "Timeline and calendar views", seeExamples: "See examples",
    setupKicker: "Set the structure", setupTitle: "Control the whole project from one panel.", setupBody: "Choose the view, language, range, and week format while the final artifact updates beside you.", setupPoints: ["Switch between timeline and calendar", "Use exact dates or complete month ranges", "Choose one of 15 output languages", "Start the week on Monday or Sunday", "Catch invalid ranges before creating"],
    activitiesKicker: "Manage the work", activitiesTitle: "Every activity stays easy to edit.", activitiesBody: "Add as many phases as you need, keep their dates consistent, and see the result immediately.", activitiesPoints: ["Drag to reorder or sort by start date", "Set a name, color, start date, and end date", "Duplicate or delete individual activities", "Mark milestones as one-day events", "Preview every change in real time"],
    examplesKicker: "Real output", examplesTitle: "Two views. One source of truth.", timelineTitle: "Timeline", timelineText: "Best for roadmaps, launches, sprints, and plans where duration and sequence matter.", calendarTitle: "Calendar", calendarText: "Best for editorial calendars, campaigns, and plans that need a clear day-by-day view.",
    betaTitle: "Simple Timelines is in beta.", betaText: "The core workflow is ready. Small visual and compatibility improvements will continue as the plugin is tested in more files.",
    finalTitle: "Make the plan easy to understand.", finalBody: "Install Simple Timelines and create your next project view directly in Figma.", coffee: "Buy me a coffee", madeWith: "Made with love by", analyticsText: "Allow anonymous analytics to help improve the site?", analyticsAccept: "Allow", analyticsReject: "No thanks",
    altOverview: "Simple Timelines editor showing timeline settings and a live preview", altActivities: "Simple Timelines activity editor with four activities and a live preview", altTimeline: "Generated product launch timeline", altCalendar: "Generated six-month product launch calendar",
  },
  "pt-BR": {
    navExamples: "Exemplos", install: "Instalar no Figma", language: "Trocar idioma", theme: "Trocar tema", beta: "Beta",
    eyebrow: "Plugin para Figma", heroTitle: "Timelines claras, criadas dentro do Figma.", heroBody: "Transforme datas e atividades em timelines ou calendários prontos para apresentar. Configure, visualize e crie sem desenhar cada bloco manualmente.", heroPoint1: "Resultado editável no Figma", heroPoint2: "Modos timeline e calendário", seeExamples: "Ver exemplos",
    setupKicker: "Defina a estrutura", setupTitle: "Controle todo o projeto em um único painel.", setupBody: "Escolha a visualização, o idioma, o período e o formato da semana enquanto o artefato final é atualizado ao lado.", setupPoints: ["Alterne entre timeline e calendário", "Use datas exatas ou intervalos mensais completos", "Escolha um dos 15 idiomas de saída", "Comece a semana na segunda ou no domingo", "Identifique períodos inválidos antes de criar"],
    activitiesKicker: "Gerencie o trabalho", activitiesTitle: "Cada atividade continua fácil de editar.", activitiesBody: "Adicione quantas fases precisar, mantenha as datas consistentes e veja o resultado imediatamente.", activitiesPoints: ["Arraste para reordenar ou ordene pela data inicial", "Defina nome, cor, início e fim", "Duplique ou exclua atividades individuais", "Marque entregas como eventos de um dia", "Visualize todas as mudanças em tempo real"],
    examplesKicker: "Resultado real", examplesTitle: "Duas visualizações. Uma única fonte de dados.", timelineTitle: "Timeline", timelineText: "Ideal para roadmaps, lançamentos, sprints e planos em que duração e sequência importam.", calendarTitle: "Calendário", calendarText: "Ideal para calendários editoriais, campanhas e planos que precisam de leitura diária.",
    betaTitle: "O Simple Timelines está em beta.", betaText: "O fluxo principal está pronto. Pequenos ajustes visuais e de compatibilidade continuarão enquanto o plugin for testado em mais arquivos.",
    finalTitle: "Deixe o planejamento fácil de entender.", finalBody: "Instale o Simple Timelines e crie a próxima visualização do seu projeto diretamente no Figma.", coffee: "Buy me a coffee", madeWith: "Feito com amor por", analyticsText: "Permitir analytics anônimo para ajudar a melhorar o site?", analyticsAccept: "Permitir", analyticsReject: "Agora não",
    altOverview: "Editor do Simple Timelines com configurações e preview ao vivo", altActivities: "Editor de atividades do Simple Timelines com quatro atividades e preview", altTimeline: "Timeline gerada para lançamento de produto", altCalendar: "Calendário de seis meses gerado para lançamento de produto",
  },
  "es-ES": {
    navExamples: "Ejemplos", install: "Instalar en Figma", language: "Cambiar idioma", theme: "Cambiar tema", beta: "Beta",
    eyebrow: "Plugin para Figma", heroTitle: "Timelines claras, creadas dentro de Figma.", heroBody: "Convierte fechas y actividades en timelines o calendarios listos para presentar. Configura, previsualiza y crea sin dibujar cada bloque a mano.", heroPoint1: "Resultado editable en Figma", heroPoint2: "Vistas timeline y calendario", seeExamples: "Ver ejemplos",
    setupKicker: "Define la estructura", setupTitle: "Controla todo el proyecto desde un panel.", setupBody: "Elige vista, idioma, periodo y formato semanal mientras el resultado se actualiza al lado.", setupPoints: ["Cambia entre timeline y calendario", "Usa fechas exactas o meses completos", "Elige uno de 15 idiomas", "Empieza la semana en lunes o domingo", "Detecta rangos inválidos antes de crear"],
    activitiesKicker: "Gestiona el trabajo", activitiesTitle: "Cada actividad sigue siendo fácil de editar.", activitiesBody: "Añade las fases que necesites, mantén las fechas coherentes y revisa el resultado al instante.", activitiesPoints: ["Arrastra para reordenar u ordena por fecha inicial", "Define nombre, color, inicio y fin", "Duplica o elimina actividades", "Marca hitos como eventos de un día", "Previsualiza cada cambio en tiempo real"],
    examplesKicker: "Resultado real", examplesTitle: "Dos vistas. Una sola fuente de datos.", timelineTitle: "Timeline", timelineText: "Ideal para roadmaps, lanzamientos, sprints y planes donde importan la duración y el orden.", calendarTitle: "Calendario", calendarText: "Ideal para calendarios editoriales, campañas y planes con lectura diaria.",
    betaTitle: "Simple Timelines está en beta.", betaText: "El flujo principal está listo. Seguirán pequeños ajustes visuales y de compatibilidad mientras se prueba en más archivos.",
    finalTitle: "Haz que el plan sea fácil de entender.", finalBody: "Instala Simple Timelines y crea la próxima vista de tu proyecto directamente en Figma.", coffee: "Buy me a coffee", madeWith: "Hecho con amor por", analyticsText: "¿Permitir analítica anónima para mejorar el sitio?", analyticsAccept: "Permitir", analyticsReject: "No, gracias",
    altOverview: "Editor de Simple Timelines con ajustes y vista previa en vivo", altActivities: "Editor de actividades con cuatro actividades y vista previa", altTimeline: "Timeline generada para el lanzamiento de un producto", altCalendar: "Calendario de seis meses generado para un lanzamiento",
  },
  "fr-FR": {
    navExamples: "Exemples", install: "Installer dans Figma", language: "Changer de langue", theme: "Changer de thème", beta: "Bêta",
    eyebrow: "Plugin Figma", heroTitle: "Des timelines claires, créées dans Figma.", heroBody: "Transformez dates et activités en timelines ou calendriers prêts à présenter. Configurez, prévisualisez et créez sans dessiner chaque bloc.", heroPoint1: "Résultat Figma modifiable", heroPoint2: "Vues timeline et calendrier", seeExamples: "Voir les exemples",
    setupKicker: "Définir la structure", setupTitle: "Pilotez tout le projet depuis un panneau.", setupBody: "Choisissez la vue, la langue, la période et le format de semaine pendant que le résultat se met à jour.", setupPoints: ["Passez de la timeline au calendrier", "Utilisez des dates exactes ou des mois complets", "Choisissez parmi 15 langues", "Commencez la semaine lundi ou dimanche", "Repérez les périodes invalides avant la création"],
    activitiesKicker: "Gérer le travail", activitiesTitle: "Chaque activité reste simple à modifier.", activitiesBody: "Ajoutez les phases nécessaires, gardez des dates cohérentes et voyez immédiatement le résultat.", activitiesPoints: ["Glissez pour réordonner ou triez par date", "Définissez nom, couleur, début et fin", "Dupliquez ou supprimez une activité", "Marquez les jalons sur une journée", "Prévisualisez chaque changement en direct"],
    examplesKicker: "Résultat réel", examplesTitle: "Deux vues. Une seule source de données.", timelineTitle: "Timeline", timelineText: "Pour roadmaps, lancements, sprints et plans où durée et séquence comptent.", calendarTitle: "Calendrier", calendarText: "Pour calendriers éditoriaux, campagnes et plans à lire jour par jour.",
    betaTitle: "Simple Timelines est en bêta.", betaText: "Le flux principal est prêt. De petites améliorations visuelles et de compatibilité suivront avec les tests.",
    finalTitle: "Rendez le plan facile à comprendre.", finalBody: "Installez Simple Timelines et créez votre prochaine vue de projet directement dans Figma.", coffee: "Buy me a coffee", madeWith: "Fait avec amour par", analyticsText: "Autoriser des statistiques anonymes pour améliorer le site ?", analyticsAccept: "Autoriser", analyticsReject: "Non merci",
    altOverview: "Éditeur Simple Timelines avec réglages et aperçu en direct", altActivities: "Éditeur d’activités avec quatre activités et aperçu", altTimeline: "Timeline générée pour un lancement produit", altCalendar: "Calendrier de six mois généré pour un lancement",
  },
  "de-DE": {
    navExamples: "Beispiele", install: "In Figma installieren", language: "Sprache ändern", theme: "Design ändern", beta: "Beta",
    eyebrow: "Figma-Plugin", heroTitle: "Klare Timelines, direkt in Figma erstellt.", heroBody: "Verwandle Termine und Aktivitäten in präsentationsfertige Timelines oder Kalender. Konfigurieren, prüfen und erstellen – ohne jeden Block manuell zu zeichnen.", heroPoint1: "Bearbeitbares Figma-Ergebnis", heroPoint2: "Timeline- und Kalenderansicht", seeExamples: "Beispiele ansehen",
    setupKicker: "Struktur festlegen", setupTitle: "Das ganze Projekt in einem Panel steuern.", setupBody: "Wähle Ansicht, Sprache, Zeitraum und Wochenformat, während sich das Ergebnis daneben aktualisiert.", setupPoints: ["Zwischen Timeline und Kalender wechseln", "Exakte Daten oder ganze Monate nutzen", "Eine von 15 Sprachen wählen", "Woche montags oder sonntags beginnen", "Ungültige Zeiträume vorab erkennen"],
    activitiesKicker: "Arbeit verwalten", activitiesTitle: "Jede Aktivität bleibt leicht bearbeitbar.", activitiesBody: "Füge beliebig viele Phasen hinzu, halte Daten konsistent und sieh das Ergebnis sofort.", activitiesPoints: ["Per Drag-and-drop ordnen oder nach Start sortieren", "Name, Farbe, Start und Ende festlegen", "Einzelne Aktivitäten duplizieren oder löschen", "Meilensteine als eintägige Ereignisse markieren", "Alle Änderungen live prüfen"],
    examplesKicker: "Echtes Ergebnis", examplesTitle: "Zwei Ansichten. Eine Datenquelle.", timelineTitle: "Timeline", timelineText: "Für Roadmaps, Launches, Sprints und Pläne, bei denen Dauer und Reihenfolge zählen.", calendarTitle: "Kalender", calendarText: "Für Redaktionskalender, Kampagnen und tägliche Planungsansichten.",
    betaTitle: "Simple Timelines ist in der Beta.", betaText: "Der Kernablauf ist fertig. Kleine visuelle und technische Verbesserungen folgen mit weiteren Tests.",
    finalTitle: "Mach den Plan leicht verständlich.", finalBody: "Installiere Simple Timelines und erstelle deine nächste Projektansicht direkt in Figma.", coffee: "Buy me a coffee", madeWith: "Mit Liebe gemacht von", analyticsText: "Anonyme Analysen zur Verbesserung der Website erlauben?", analyticsAccept: "Erlauben", analyticsReject: "Nein danke",
    altOverview: "Simple-Timelines-Editor mit Einstellungen und Live-Vorschau", altActivities: "Aktivitätseditor mit vier Aktivitäten und Vorschau", altTimeline: "Erstellte Timeline für einen Produktlaunch", altCalendar: "Erstellter Sechsmonatskalender für einen Launch",
  },
  "it-IT": {
    navExamples: "Esempi", install: "Installa in Figma", language: "Cambia lingua", theme: "Cambia tema", beta: "Beta",
    eyebrow: "Plugin per Figma", heroTitle: "Timeline chiare, create dentro Figma.", heroBody: "Trasforma date e attività in timeline o calendari pronti da presentare. Configura, visualizza e crea senza disegnare ogni blocco a mano.", heroPoint1: "Output Figma modificabile", heroPoint2: "Viste timeline e calendario", seeExamples: "Vedi esempi",
    setupKicker: "Definisci la struttura", setupTitle: "Controlla l’intero progetto da un pannello.", setupBody: "Scegli vista, lingua, intervallo e formato settimanale mentre il risultato si aggiorna accanto.", setupPoints: ["Passa da timeline a calendario", "Usa date esatte o mesi completi", "Scegli tra 15 lingue", "Inizia la settimana lunedì o domenica", "Individua intervalli non validi prima di creare"],
    activitiesKicker: "Gestisci il lavoro", activitiesTitle: "Ogni attività resta facile da modificare.", activitiesBody: "Aggiungi tutte le fasi necessarie, mantieni le date coerenti e controlla subito il risultato.", activitiesPoints: ["Trascina per riordinare o ordina per data iniziale", "Imposta nome, colore, inizio e fine", "Duplica o elimina singole attività", "Segna le milestone come eventi di un giorno", "Visualizza ogni modifica in tempo reale"],
    examplesKicker: "Output reale", examplesTitle: "Due viste. Un’unica fonte dati.", timelineTitle: "Timeline", timelineText: "Per roadmap, lanci, sprint e piani in cui contano durata e sequenza.", calendarTitle: "Calendario", calendarText: "Per calendari editoriali, campagne e piani con lettura giorno per giorno.",
    betaTitle: "Simple Timelines è in beta.", betaText: "Il flusso principale è pronto. Piccoli miglioramenti visivi e di compatibilità continueranno con i test.",
    finalTitle: "Rendi il piano facile da capire.", finalBody: "Installa Simple Timelines e crea la prossima vista del progetto direttamente in Figma.", coffee: "Buy me a coffee", madeWith: "Fatto con amore da", analyticsText: "Consentire analisi anonime per migliorare il sito?", analyticsAccept: "Consenti", analyticsReject: "No grazie",
    altOverview: "Editor Simple Timelines con impostazioni e anteprima live", altActivities: "Editor attività con quattro attività e anteprima", altTimeline: "Timeline generata per il lancio di un prodotto", altCalendar: "Calendario semestrale generato per un lancio",
  },
  "nl-NL": {
    navExamples: "Voorbeelden", install: "Installeren in Figma", language: "Taal wijzigen", theme: "Thema wijzigen", beta: "Beta",
    eyebrow: "Figma-plugin", heroTitle: "Duidelijke tijdlijnen, gemaakt in Figma.", heroBody: "Zet datums en activiteiten om in presentatieklare tijdlijnen of kalenders. Stel in, bekijk en maak zonder elk blok handmatig te tekenen.", heroPoint1: "Bewerkbare Figma-uitvoer", heroPoint2: "Tijdlijn- en kalenderweergave", seeExamples: "Bekijk voorbeelden",
    setupKicker: "Structuur bepalen", setupTitle: "Beheer het hele project vanuit één paneel.", setupBody: "Kies weergave, taal, periode en weekindeling terwijl het resultaat ernaast wordt bijgewerkt.", setupPoints: ["Wissel tussen tijdlijn en kalender", "Gebruik exacte datums of volledige maanden", "Kies uit 15 talen", "Begin de week op maandag of zondag", "Zie ongeldige perioden vóór het maken"],
    activitiesKicker: "Werk beheren", activitiesTitle: "Elke activiteit blijft eenvoudig te bewerken.", activitiesBody: "Voeg alle benodigde fasen toe, houd datums consistent en zie direct het resultaat.", activitiesPoints: ["Sleep om te ordenen of sorteer op startdatum", "Stel naam, kleur, begin en einde in", "Dupliceer of verwijder activiteiten", "Markeer mijlpalen als eendaagse gebeurtenissen", "Bekijk elke wijziging live"],
    examplesKicker: "Echte uitvoer", examplesTitle: "Twee weergaven. Eén gegevensbron.", timelineTitle: "Tijdlijn", timelineText: "Voor roadmaps, lanceringen, sprints en plannen waar duur en volgorde tellen.", calendarTitle: "Kalender", calendarText: "Voor contentkalenders, campagnes en plannen met een dagelijkse weergave.",
    betaTitle: "Simple Timelines is in bèta.", betaText: "De kern werkt. Kleine visuele en compatibiliteitsverbeteringen volgen tijdens verdere tests.",
    finalTitle: "Maak het plan eenvoudig te begrijpen.", finalBody: "Installeer Simple Timelines en maak je volgende projectweergave direct in Figma.", coffee: "Buy me a coffee", madeWith: "Met liefde gemaakt door", analyticsText: "Anonieme analytics toestaan om de site te verbeteren?", analyticsAccept: "Toestaan", analyticsReject: "Nee bedankt",
    altOverview: "Simple Timelines-editor met instellingen en live voorbeeld", altActivities: "Activiteiteneditor met vier activiteiten en voorbeeld", altTimeline: "Gegenereerde tijdlijn voor een productlancering", altCalendar: "Gegenereerde kalender van zes maanden",
  },
  "pl-PL": {
    navExamples: "Przykłady", install: "Zainstaluj w Figma", language: "Zmień język", theme: "Zmień motyw", beta: "Beta",
    eyebrow: "Wtyczka Figma", heroTitle: "Przejrzyste osie czasu tworzone w Figma.", heroBody: "Zamień daty i aktywności w gotowe do prezentacji osie czasu lub kalendarze. Konfiguruj, podglądaj i twórz bez ręcznego rysowania bloków.", heroPoint1: "Edytowalny wynik w Figma", heroPoint2: "Widok osi czasu i kalendarza", seeExamples: "Zobacz przykłady",
    setupKicker: "Ustaw strukturę", setupTitle: "Kontroluj cały projekt z jednego panelu.", setupBody: "Wybierz widok, język, zakres i układ tygodnia, obserwując aktualizowany wynik.", setupPoints: ["Przełączaj oś czasu i kalendarz", "Używaj dokładnych dat lub pełnych miesięcy", "Wybierz jeden z 15 języków", "Zacznij tydzień w poniedziałek lub niedzielę", "Wykryj błędne zakresy przed utworzeniem"],
    activitiesKicker: "Zarządzaj pracą", activitiesTitle: "Każdą aktywność łatwo edytujesz.", activitiesBody: "Dodaj potrzebne etapy, zachowaj spójność dat i natychmiast zobacz wynik.", activitiesPoints: ["Przeciągaj lub sortuj według daty startu", "Ustaw nazwę, kolor, początek i koniec", "Duplikuj lub usuwaj aktywności", "Oznacz kamienie milowe jako jednodniowe", "Podglądaj każdą zmianę na żywo"],
    examplesKicker: "Rzeczywisty wynik", examplesTitle: "Dwa widoki. Jedno źródło danych.", timelineTitle: "Oś czasu", timelineText: "Do roadmap, premier, sprintów i planów, gdzie liczy się czas i kolejność.", calendarTitle: "Kalendarz", calendarText: "Do kalendarzy redakcyjnych, kampanii i planów wymagających widoku dziennego.",
    betaTitle: "Simple Timelines jest w wersji beta.", betaText: "Główny przepływ jest gotowy. Drobne poprawki wizualne i zgodności będą rozwijane podczas testów.",
    finalTitle: "Spraw, by plan był łatwy do zrozumienia.", finalBody: "Zainstaluj Simple Timelines i stwórz kolejny widok projektu bezpośrednio w Figma.", coffee: "Buy me a coffee", madeWith: "Stworzone z miłością przez", analyticsText: "Zezwolić na anonimową analitykę, by ulepszać stronę?", analyticsAccept: "Zezwól", analyticsReject: "Nie, dziękuję",
    altOverview: "Edytor Simple Timelines z ustawieniami i podglądem", altActivities: "Edytor aktywności z czterema aktywnościami i podglądem", altTimeline: "Wygenerowana oś czasu premiery produktu", altCalendar: "Wygenerowany sześciomiesięczny kalendarz",
  },
  "tr-TR": {
    navExamples: "Örnekler", install: "Figma’ya yükle", language: "Dili değiştir", theme: "Temayı değiştir", beta: "Beta",
    eyebrow: "Figma eklentisi", heroTitle: "Net zaman çizelgeleri, Figma içinde oluşturulur.", heroBody: "Tarihleri ve etkinlikleri sunuma hazır zaman çizelgelerine veya takvimlere dönüştürün. Her bloğu elle çizmeden ayarlayın, önizleyin ve oluşturun.", heroPoint1: "Düzenlenebilir Figma çıktısı", heroPoint2: "Zaman çizelgesi ve takvim", seeExamples: "Örnekleri gör",
    setupKicker: "Yapıyı belirleyin", setupTitle: "Tüm projeyi tek panelden yönetin.", setupBody: "Sonuç yan tarafta güncellenirken görünüm, dil, tarih aralığı ve hafta biçimini seçin.", setupPoints: ["Zaman çizelgesi ile takvim arasında geçin", "Kesin tarihler veya tam aylar kullanın", "15 dilden birini seçin", "Haftayı pazartesi veya pazar başlatın", "Oluşturmadan önce hatalı aralıkları görün"],
    activitiesKicker: "İşi yönetin", activitiesTitle: "Her etkinliği kolayca düzenleyin.", activitiesBody: "İstediğiniz kadar aşama ekleyin, tarihleri tutarlı tutun ve sonucu hemen görün.", activitiesPoints: ["Sürükleyerek sıralayın veya başlangıca göre dizin", "Ad, renk, başlangıç ve bitiş belirleyin", "Etkinlikleri çoğaltın veya silin", "Kilometre taşlarını tek günlük işaretleyin", "Her değişikliği canlı önizleyin"],
    examplesKicker: "Gerçek çıktı", examplesTitle: "İki görünüm. Tek veri kaynağı.", timelineTitle: "Zaman çizelgesi", timelineText: "Süre ve sıranın önemli olduğu yol haritaları, lansmanlar ve sprintler için.", calendarTitle: "Takvim", calendarText: "Günlük görünüm gerektiren içerik takvimleri, kampanyalar ve planlar için.",
    betaTitle: "Simple Timelines beta sürümünde.", betaText: "Temel akış hazır. Daha fazla dosyada test edildikçe küçük görsel ve uyumluluk iyileştirmeleri sürecek.",
    finalTitle: "Planı anlaşılır hale getirin.", finalBody: "Simple Timelines’ı yükleyin ve sonraki proje görünümünüzü doğrudan Figma’da oluşturun.", coffee: "Buy me a coffee", madeWith: "Sevgiyle yapan", analyticsText: "Siteyi geliştirmek için anonim analitiğe izin verilsin mi?", analyticsAccept: "İzin ver", analyticsReject: "Hayır",
    altOverview: "Ayarlar ve canlı önizlemeyle Simple Timelines editörü", altActivities: "Dört etkinlik ve önizlemeyle etkinlik editörü", altTimeline: "Ürün lansmanı için oluşturulan zaman çizelgesi", altCalendar: "Lansman için oluşturulan altı aylık takvim",
  },
  "ru-RU": {
    navExamples: "Примеры", install: "Установить в Figma", language: "Сменить язык", theme: "Сменить тему", beta: "Бета",
    eyebrow: "Плагин Figma", heroTitle: "Понятные таймлайны прямо в Figma.", heroBody: "Превращайте даты и задачи в готовые к презентации таймлайны или календари. Настраивайте, просматривайте и создавайте без ручной отрисовки блоков.", heroPoint1: "Редактируемый результат Figma", heroPoint2: "Таймлайн и календарь", seeExamples: "Смотреть примеры",
    setupKicker: "Задайте структуру", setupTitle: "Управляйте всем проектом из одной панели.", setupBody: "Выберите вид, язык, период и формат недели, наблюдая обновление результата рядом.", setupPoints: ["Переключайтесь между таймлайном и календарём", "Используйте точные даты или полные месяцы", "Выберите один из 15 языков", "Начинайте неделю с понедельника или воскресенья", "Находите неверные периоды до создания"],
    activitiesKicker: "Управляйте работой", activitiesTitle: "Каждую задачу легко редактировать.", activitiesBody: "Добавляйте нужные этапы, сохраняйте согласованность дат и сразу видьте результат.", activitiesPoints: ["Перетаскивайте или сортируйте по дате начала", "Задавайте название, цвет, начало и конец", "Дублируйте или удаляйте задачи", "Отмечайте однодневные вехи", "Смотрите изменения в реальном времени"],
    examplesKicker: "Реальный результат", examplesTitle: "Два вида. Один источник данных.", timelineTitle: "Таймлайн", timelineText: "Для дорожных карт, запусков, спринтов и планов, где важны длительность и порядок.", calendarTitle: "Календарь", calendarText: "Для редакционных календарей, кампаний и планов с ежедневным представлением.",
    betaTitle: "Simple Timelines находится в бета-версии.", betaText: "Основной процесс готов. Небольшие визуальные улучшения и совместимость будут дорабатываться по мере тестирования.",
    finalTitle: "Сделайте план понятным.", finalBody: "Установите Simple Timelines и создайте следующий вид проекта прямо в Figma.", coffee: "Buy me a coffee", madeWith: "Сделано с любовью —", analyticsText: "Разрешить анонимную аналитику для улучшения сайта?", analyticsAccept: "Разрешить", analyticsReject: "Нет, спасибо",
    altOverview: "Редактор Simple Timelines с настройками и предпросмотром", altActivities: "Редактор с четырьмя задачами и предпросмотром", altTimeline: "Созданный таймлайн запуска продукта", altCalendar: "Созданный календарь запуска на шесть месяцев",
  },
  "ar-SA": {
    navExamples: "أمثلة", install: "التثبيت في Figma", language: "تغيير اللغة", theme: "تغيير المظهر", beta: "تجريبي",
    eyebrow: "إضافة Figma", heroTitle: "خطوط زمنية واضحة داخل Figma.", heroBody: "حوّل التواريخ والأنشطة إلى خط زمني أو تقويم جاهز للعرض. اضبط وعاين وأنشئ من دون رسم كل عنصر يدوياً.", heroPoint1: "نتيجة قابلة للتحرير", heroPoint2: "عرض خط زمني وتقويم", seeExamples: "عرض الأمثلة",
    setupKicker: "حدد الهيكل", setupTitle: "تحكم بالمشروع كله من لوحة واحدة.", setupBody: "اختر العرض واللغة والنطاق وبداية الأسبوع بينما تتحدث النتيجة بجانبك.", setupPoints: ["بدّل بين الخط الزمني والتقويم", "استخدم تواريخ دقيقة أو أشهراً كاملة", "اختر واحدة من 15 لغة", "ابدأ الأسبوع يوم الاثنين أو الأحد", "اكتشف النطاقات غير الصالحة قبل الإنشاء"],
    activitiesKicker: "أدر العمل", activitiesTitle: "يبقى كل نشاط سهل التعديل.", activitiesBody: "أضف المراحل المطلوبة وحافظ على اتساق التواريخ وشاهد النتيجة فوراً.", activitiesPoints: ["اسحب لإعادة الترتيب أو رتب حسب البداية", "حدد الاسم واللون والبداية والنهاية", "كرر الأنشطة أو احذفها", "حوّل المعالم إلى أحداث ليوم واحد", "عاين كل تغيير مباشرة"],
    examplesKicker: "نتيجة حقيقية", examplesTitle: "عرضان. مصدر بيانات واحد.", timelineTitle: "الخط الزمني", timelineText: "لخطط الطريق والإطلاقات والدورات والخطط التي تعتمد على المدة والتسلسل.", calendarTitle: "التقويم", calendarText: "للتقاويم التحريرية والحملات والخطط التي تحتاج عرضاً يومياً.",
    betaTitle: "Simple Timelines في مرحلة تجريبية.", betaText: "سير العمل الأساسي جاهز. ستستمر تحسينات بصرية وتوافقية صغيرة مع المزيد من الاختبارات.",
    finalTitle: "اجعل الخطة سهلة الفهم.", finalBody: "ثبّت Simple Timelines وأنشئ عرض مشروعك التالي مباشرة في Figma.", coffee: "Buy me a coffee", madeWith: "صُنع بحب بواسطة", analyticsText: "السماح بتحليلات مجهولة لتحسين الموقع؟", analyticsAccept: "سماح", analyticsReject: "لا شكراً",
    altOverview: "محرر Simple Timelines مع الإعدادات والمعاينة", altActivities: "محرر الأنشطة مع أربعة أنشطة ومعاينة", altTimeline: "خط زمني تم إنشاؤه لإطلاق منتج", altCalendar: "تقويم لستة أشهر تم إنشاؤه للإطلاق",
  },
  "hi-IN": {
    navExamples: "उदाहरण", install: "Figma में इंस्टॉल करें", language: "भाषा बदलें", theme: "थीम बदलें", beta: "बीटा",
    eyebrow: "Figma प्लगइन", heroTitle: "स्पष्ट टाइमलाइन, सीधे Figma के अंदर।", heroBody: "तारीखों और गतिविधियों को प्रस्तुति-तैयार टाइमलाइन या कैलेंडर में बदलें। हर ब्लॉक हाथ से बनाए बिना सेट करें, प्रीव्यू देखें और बनाएँ।", heroPoint1: "संपादन योग्य Figma आउटपुट", heroPoint2: "टाइमलाइन और कैलेंडर दृश्य", seeExamples: "उदाहरण देखें",
    setupKicker: "संरचना तय करें", setupTitle: "पूरे प्रोजेक्ट को एक पैनल से नियंत्रित करें।", setupBody: "दृश्य, भाषा, अवधि और सप्ताह का प्रारूप चुनें और साथ में परिणाम अपडेट होते देखें।", setupPoints: ["टाइमलाइन और कैलेंडर बदलें", "सटीक तारीखें या पूरे महीने चुनें", "15 भाषाओं में से चुनें", "सप्ताह सोमवार या रविवार से शुरू करें", "बनाने से पहले गलत अवधि पहचानें"],
    activitiesKicker: "काम सँभालें", activitiesTitle: "हर गतिविधि आसानी से संपादित होती है।", activitiesBody: "जितने चरण चाहिए जोड़ें, तारीखें सही रखें और परिणाम तुरंत देखें।", activitiesPoints: ["खींचकर क्रम बदलें या शुरू की तारीख से सॉर्ट करें", "नाम, रंग, शुरुआत और अंत सेट करें", "गतिविधि डुप्लिकेट या हटाएँ", "माइलस्टोन को एक-दिन का इवेंट बनाएँ", "हर बदलाव का लाइव प्रीव्यू देखें"],
    examplesKicker: "वास्तविक आउटपुट", examplesTitle: "दो दृश्य। एक डेटा स्रोत।", timelineTitle: "टाइमलाइन", timelineText: "रोडमैप, लॉन्च, स्प्रिंट और अवधि व क्रम वाले प्लान के लिए।", calendarTitle: "कैलेंडर", calendarText: "एडिटोरियल कैलेंडर, कैंपेन और दिन-दर-दिन प्लान के लिए।",
    betaTitle: "Simple Timelines अभी बीटा में है।", betaText: "मुख्य वर्कफ़्लो तैयार है। अधिक फ़ाइलों में परीक्षण के साथ छोटे दृश्य और संगतता सुधार जारी रहेंगे।",
    finalTitle: "प्लान को समझना आसान बनाएँ।", finalBody: "Simple Timelines इंस्टॉल करें और अगला प्रोजेक्ट दृश्य सीधे Figma में बनाएँ।", coffee: "Buy me a coffee", madeWith: "प्यार से बनाया", analyticsText: "साइट सुधारने के लिए अनाम एनालिटिक्स की अनुमति दें?", analyticsAccept: "अनुमति दें", analyticsReject: "नहीं, धन्यवाद",
    altOverview: "सेटिंग और लाइव प्रीव्यू वाला Simple Timelines एडिटर", altActivities: "चार गतिविधियों और प्रीव्यू वाला गतिविधि एडिटर", altTimeline: "प्रोडक्ट लॉन्च के लिए बनाई गई टाइमलाइन", altCalendar: "लॉन्च के लिए बनाया गया छह-माह का कैलेंडर",
  },
  "zh-CN": {
    navExamples: "示例", install: "安装到 Figma", language: "切换语言", theme: "切换主题", beta: "测试版",
    eyebrow: "Figma 插件", heroTitle: "直接在 Figma 中创建清晰时间线。", heroBody: "把日期和活动转换为可直接展示的时间线或日历。无需手动画每个区块，即可设置、预览和生成。", heroPoint1: "可编辑的 Figma 输出", heroPoint2: "时间线与日历视图", seeExamples: "查看示例",
    setupKicker: "定义结构", setupTitle: "在一个面板中控制整个项目。", setupBody: "选择视图、语言、范围和每周起始日，右侧结果会同步更新。", setupPoints: ["在时间线和日历之间切换", "使用准确日期或完整月份", "选择 15 种输出语言之一", "选择周一或周日作为每周起始日", "生成前发现无效日期范围"],
    activitiesKicker: "管理工作", activitiesTitle: "每个活动都易于编辑。", activitiesBody: "添加所需阶段，保持日期一致，并立即查看结果。", activitiesPoints: ["拖动排序或按开始日期排序", "设置名称、颜色、开始和结束日期", "复制或删除单个活动", "把里程碑标记为单日事件", "实时预览每项更改"],
    examplesKicker: "真实输出", examplesTitle: "两种视图，一个数据源。", timelineTitle: "时间线", timelineText: "适合路线图、发布、冲刺，以及重视持续时间和顺序的计划。", calendarTitle: "日历", calendarText: "适合内容日历、营销活动和需要逐日查看的计划。",
    betaTitle: "Simple Timelines 目前处于测试阶段。", betaText: "核心流程已可用。随着在更多文件中测试，仍会持续优化视觉和兼容性。",
    finalTitle: "让计划一目了然。", finalBody: "安装 Simple Timelines，直接在 Figma 中创建下一个项目视图。", coffee: "Buy me a coffee", madeWith: "由以下作者用心制作", analyticsText: "是否允许匿名分析以帮助改进网站？", analyticsAccept: "允许", analyticsReject: "不用了",
    altOverview: "显示设置和实时预览的 Simple Timelines 编辑器", altActivities: "包含四个活动和预览的活动编辑器", altTimeline: "生成的产品发布时间线", altCalendar: "生成的六个月产品发布日历",
  },
  "ja-JP": {
    navExamples: "例", install: "Figma にインストール", language: "言語を変更", theme: "テーマを変更", beta: "ベータ",
    eyebrow: "Figma プラグイン", heroTitle: "Figma の中で、明確なタイムラインを。", heroBody: "日付とアクティビティを、プレゼン可能なタイムラインやカレンダーに変換。各ブロックを手作業で描かずに設定・確認・作成できます。", heroPoint1: "編集可能な Figma 出力", heroPoint2: "タイムラインとカレンダー", seeExamples: "例を見る",
    setupKicker: "構成を設定", setupTitle: "1つのパネルでプロジェクト全体を管理。", setupBody: "表示、言語、期間、週の形式を選ぶと、隣の完成イメージが更新されます。", setupPoints: ["タイムラインとカレンダーを切り替え", "正確な日付または月単位の期間を使用", "15言語から選択", "週の開始を月曜または日曜に設定", "作成前に無効な期間を検出"],
    activitiesKicker: "作業を管理", activitiesTitle: "すべてのアクティビティを簡単に編集。", activitiesBody: "必要な工程を追加し、日付の整合性を保ちながら結果をすぐ確認できます。", activitiesPoints: ["ドラッグで並べ替え、または開始日でソート", "名前、色、開始日、終了日を設定", "個別に複製・削除", "マイルストーンを1日イベントに設定", "変更をリアルタイムでプレビュー"],
    examplesKicker: "実際の出力", examplesTitle: "2つの表示。データは1つ。", timelineTitle: "タイムライン", timelineText: "ロードマップ、ローンチ、スプリントなど、期間と順序が重要な計画に。", calendarTitle: "カレンダー", calendarText: "編集カレンダー、キャンペーン、日ごとの確認が必要な計画に。",
    betaTitle: "Simple Timelines はベータ版です。", betaText: "主要な流れは利用可能です。より多くのファイルで検証しながら、表示と互換性を改善します。",
    finalTitle: "計画を、誰にでも分かりやすく。", finalBody: "Simple Timelines をインストールし、次のプロジェクト表示を Figma で作成しましょう。", coffee: "Buy me a coffee", madeWith: "愛を込めて制作", analyticsText: "サイト改善のため匿名分析を許可しますか？", analyticsAccept: "許可", analyticsReject: "許可しない",
    altOverview: "設定とライブプレビューを表示する Simple Timelines エディター", altActivities: "4つのアクティビティとプレビューを表示するエディター", altTimeline: "生成された製品ローンチのタイムライン", altCalendar: "生成された6か月のローンチカレンダー",
  },
  "ko-KR": {
    navExamples: "예시", install: "Figma에 설치", language: "언어 변경", theme: "테마 변경", beta: "베타",
    eyebrow: "Figma 플러그인", heroTitle: "Figma 안에서 만드는 명확한 타임라인.", heroBody: "날짜와 활동을 발표 가능한 타임라인 또는 캘린더로 바꾸세요. 모든 블록을 직접 그리지 않고 설정하고 미리 보고 생성할 수 있습니다.", heroPoint1: "편집 가능한 Figma 결과", heroPoint2: "타임라인과 캘린더 보기", seeExamples: "예시 보기",
    setupKicker: "구조 설정", setupTitle: "하나의 패널에서 전체 프로젝트를 제어하세요.", setupBody: "보기, 언어, 기간, 주 형식을 선택하면 옆의 결과가 즉시 업데이트됩니다.", setupPoints: ["타임라인과 캘린더 전환", "정확한 날짜 또는 전체 월 범위 사용", "15개 언어 중 선택", "주 시작을 월요일 또는 일요일로 설정", "생성 전 잘못된 기간 확인"],
    activitiesKicker: "업무 관리", activitiesTitle: "모든 활동을 쉽게 편집하세요.", activitiesBody: "필요한 단계를 추가하고 날짜를 일관되게 유지하며 결과를 즉시 확인하세요.", activitiesPoints: ["드래그로 재정렬하거나 시작일 기준 정렬", "이름, 색상, 시작일, 종료일 설정", "개별 활동 복제 또는 삭제", "마일스톤을 하루 이벤트로 표시", "모든 변경 사항 실시간 미리보기"],
    examplesKicker: "실제 결과", examplesTitle: "두 가지 보기. 하나의 데이터.", timelineTitle: "타임라인", timelineText: "기간과 순서가 중요한 로드맵, 출시, 스프린트 및 계획에 적합합니다.", calendarTitle: "캘린더", calendarText: "편집 캘린더, 캠페인, 일별 확인이 필요한 계획에 적합합니다.",
    betaTitle: "Simple Timelines는 베타 버전입니다.", betaText: "핵심 흐름은 준비되었습니다. 더 많은 파일에서 테스트하며 작은 시각 및 호환성 개선을 계속합니다.",
    finalTitle: "계획을 쉽게 이해할 수 있게 만드세요.", finalBody: "Simple Timelines를 설치하고 다음 프로젝트 보기를 Figma에서 바로 만드세요.", coffee: "Buy me a coffee", madeWith: "사랑으로 만든 사람", analyticsText: "사이트 개선을 위해 익명 분석을 허용할까요?", analyticsAccept: "허용", analyticsReject: "괜찮습니다",
    altOverview: "설정과 실시간 미리보기가 있는 Simple Timelines 편집기", altActivities: "네 개 활동과 미리보기가 있는 활동 편집기", altTimeline: "생성된 제품 출시 타임라인", altCalendar: "생성된 6개월 제품 출시 캘린더",
  },
};
