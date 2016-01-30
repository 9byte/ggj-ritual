using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class ExperimentalSpellHandler : MonoBehaviour {

	private enum SpellPress {
		SPELL_0,
		SPELL_1,
		SPELL_2,
		SPELL_3
	}

	private List<SpellPress> spellStack = new List<SpellPress>();

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update ()
	{
		if (Input.GetButtonDown ("Spell_0")) {
			spellStack.Add(SpellPress.SPELL_0);
			print("Added spell 0 to stack. Size: " + spellStack.Count);
		}
		if (Input.GetButtonDown ("Spell_1")) {
			spellStack.Add(SpellPress.SPELL_1);
			print("Added spell 1 to stack. Size: " + spellStack.Count);
		}
		if (Input.GetButtonDown ("Spell_2")) {
			spellStack.Add(SpellPress.SPELL_2);
			print("Added spell 2 to stack. Size: " + spellStack.Count);
		}
		if (Input.GetButtonDown ("Spell_3")) {
			spellStack.Add(SpellPress.SPELL_3);
			print("Added spell 3 to stack. Size: " + spellStack.Count);
		}
	}
}
