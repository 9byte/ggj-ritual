using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class UIStack : MonoBehaviour
{
    public GameObject spellHandlerObject;

    private ExperimentalSpellHandler spellHandler;
    private Text textStack;

	void Start () 
    {
        //spellHandler = GameObject.Find("Capsule").GetComponent<ExperimentalSpellHandler>();
        spellHandler = spellHandlerObject.GetComponent<ExperimentalSpellHandler>();
        textStack = gameObject.GetComponent<Text>();
	}
	
    void Update () 
    {

        textStack.text = "";
        foreach (ExperimentalSpellHandler.SpellPress spell in spellHandler.SpellStack)
        {
            textStack.text += spell.ToString() + "\n";
        }
	}
}
