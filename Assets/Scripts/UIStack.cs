using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class UIStack : MonoBehaviour
{
    public GameObject spellHandlerObject;

    private ExperimentalSpellHandler spellHandler;
    private Text textStack;
    public int maxStackSize = 15;
	void Start () 
    {
        //spellHandler = GameObject.Find("Capsule").GetComponent<ExperimentalSpellHandler>();
        spellHandler = spellHandlerObject.GetComponent<ExperimentalSpellHandler>();
        textStack = gameObject.GetComponent<Text>();
	}
	
    void Update ()
	{

		textStack.text = "";
		IList items = null;
		if (spellHandler.SpellStack.Count < maxStackSize) {
			items = spellHandler.SpellStack;
		} else {
			items = spellHandler.SpellStack.GetRange(spellHandler.SpellStack.Count-maxStackSize, maxStackSize);
		}
        foreach (ExperimentalSpellHandler.SpellPress spell in items)
        {
            textStack.text += spell.ToString() + "\n";
        }
	}
}
