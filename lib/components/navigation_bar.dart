import 'package:flutter/material.dart';
import 'package:mcgamejam_website/components/navigation_item.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:mcgamejam_website/components/stylized_components.dart';
import 'package:mcgamejam_website/main.dart';

class NavigationBarDefault extends StatefulWidget {
  const NavigationBarDefault({Key? key})
      : super(key: key);

  @override
  State<StatefulWidget> createState() => NavigationBarDefaultState();
}

List<DropdownMenuItem> createLocaleList(String locale) {
  const englishDropDown = DropdownMenuItem(value: 'en', child: Text('English'));
  const frenchDropDown = DropdownMenuItem(value: 'fr', child: Text('Français'));
  var localeList = locale == 'en'
      ? [englishDropDown, frenchDropDown]
      : [frenchDropDown, englishDropDown];
  return localeList;
}

class NavigationBarDefaultState extends State<NavigationBarDefault> {
  late String locale;

  @override
  Widget build(BuildContext context) {
    locale = Localizations.localeOf(context).languageCode;
    final localeList = createLocaleList(locale);
    return SizedBox(
      height: 50.0,
      child: Row(
        mainAxisSize: MainAxisSize.max,
        children: [
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 30.0),
            child: McGameJamTitle(),
          ),
          NavigationItem(
              title: AppLocalizations.of(context)!.aboutTitle,
              onPressed: () {}),
          NavigationItem(title: 'FAQ', onPressed: () {}),
          NavigationItem(
              title: AppLocalizations.of(context)!.signUpTitle,
              onPressed: () {}),
          // push the dropdown to the right
          const Spacer(),
          Padding(
            padding: const EdgeInsets.only(right: 30.0),
            child: DropdownButton(
              items: localeList,
              value: locale,
              onChanged: (value) {
                setState(() {
                  locale = value.toString();
                  MyApp.of(context)
                      .setLocale(Locale.fromSubtags(languageCode: locale));
                });
              },
            ),
          )
        ],
      ),
    );
  }
}

class NavigationBarDrawer extends StatelessWidget {
  const NavigationBarDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
        child: SafeArea(
          child: Column(
            children: [
              ListTile(
                title: Text(AppLocalizations.of(context)!.aboutTitle),
                onTap: () {
                },
              ),
              ListTile(
                title: const Text('FAQ'),
                onTap: () {
                },
              ),
              ListTile(
                title: Text(AppLocalizations.of(context)!.signUpTitle),
                onTap: () {
                },
              ),
              ListTile(
                title: DropdownButton(
                  items: createLocaleList(Localizations.localeOf(context).languageCode),
                  value: Localizations.localeOf(context).languageCode,
                  onChanged: (value) {
                    MyApp.of(context)
                        .setLocale(Locale.fromSubtags(languageCode: value.toString()));
                  },
                )
              )
            ],
          ),
        )
    );
  }

}
